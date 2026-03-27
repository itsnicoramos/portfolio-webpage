(function () {
  'use strict';

  var scriptEl = document.currentScript ||
    document.querySelector('script[src*="widget.js"]');
  var API_BASE = (scriptEl && scriptEl.getAttribute('data-api')) ||
    window.location.origin;
  var ENDPOINT = API_BASE.replace(/\/$/, '') + '/.netlify/functions/chat';

  var SUGGESTIONS = [
    'What tech stack do you use?',
    'What are you building right now?',
    'How can I reach you?',
  ];

  var WELCOME = 'Ask about projects, the tech stack, or the best way to connect.';

  var sectionEl = document.getElementById('ask-nico');
  var msgContainer = document.getElementById('chat-messages');
  var inputEl = document.getElementById('chat-input');
  var sendBtn = document.getElementById('chat-send');
  var formEl = document.getElementById('chat-form');
  var sugContainer = document.getElementById('chat-suggestions');
  var errorEl = document.getElementById('chat-error');
  var panelBodyEl = document.getElementById('chat-panel-body');
  var mobileToggleEl = document.getElementById('chat-mobile-toggle');
  var mobileMedia = window.matchMedia('(max-width: 768px)');

  if (!sectionEl || !msgContainer || !inputEl || !sendBtn || !formEl || !sugContainer || !errorEl || !panelBodyEl || !mobileToggleEl) {
    return;
  }

  var history = [];
  var isLoading = false;
  var typingRow = null;
  var isMobileCollapsed = false;

  function sanitizeHref(href) {
    href = (href || '').trim();
    if (!href) return '';
    if (/^https?:\/\//i.test(href)) return href;
    if (/^(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s<]*)?$/i.test(href)) {
      return 'https://' + href.replace(/^\/+/, '');
    }
    return '';
  }

  function trimLinkSuffix(text) {
    var suffix = '';
    while (/[),.!?]$/.test(text)) {
      suffix = text.slice(-1) + suffix;
      text = text.slice(0, -1);
    }
    return { value: text, suffix: suffix };
  }

  function appendLinkedText(target, text) {
    var doc = target.ownerDocument;
    var pattern = /(https?:\/\/[^\s<]+|(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s<]*)?)/ig;
    var lastIndex = 0;
    var match;

    while ((match = pattern.exec(text)) !== null) {
      var raw = match[0];
      var cleaned = trimLinkSuffix(raw);
      var href = sanitizeHref(cleaned.value);

      if (match.index > lastIndex) {
        target.appendChild(doc.createTextNode(text.slice(lastIndex, match.index)));
      }

      if (href) {
        var link = doc.createElement('a');
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = cleaned.value;
        target.appendChild(link);
      } else {
        target.appendChild(doc.createTextNode(raw));
      }

      if (cleaned.suffix) {
        target.appendChild(doc.createTextNode(cleaned.suffix));
      }

      lastIndex = match.index + raw.length;
    }

    if (lastIndex < text.length) {
      target.appendChild(doc.createTextNode(text.slice(lastIndex)));
    }
  }

  function appendTextContent(target, text) {
    var doc = target.ownerDocument;
    var lines = String(text || '').split('\n');

    lines.forEach(function (line, index) {
      appendLinkedText(target, line);
      if (index < lines.length - 1) {
        target.appendChild(doc.createElement('br'));
      }
    });
  }

  function sanitizeNode(node, doc) {
    if (node.nodeType === Node.TEXT_NODE) {
      var textFrag = doc.createDocumentFragment();
      appendTextContent(textFrag, node.textContent || '');
      return textFrag;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return doc.createDocumentFragment();
    }

    var tag = node.tagName.toLowerCase();
    var allowed = { ul: true, li: true, p: true, br: true, a: true };

    if (!allowed[tag]) {
      var fallback = doc.createDocumentFragment();
      Array.prototype.forEach.call(node.childNodes, function (child) {
        fallback.appendChild(sanitizeNode(child, doc));
      });
      return fallback;
    }

    if (tag === 'br') {
      return doc.createElement('br');
    }

    var el = doc.createElement(tag);

    if (tag === 'a') {
      var href = sanitizeHref(node.getAttribute('href') || node.textContent || '');
      if (!href) {
        var anchorFallback = doc.createDocumentFragment();
        Array.prototype.forEach.call(node.childNodes, function (child) {
          anchorFallback.appendChild(sanitizeNode(child, doc));
        });
        return anchorFallback;
      }

      el.href = href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }

    Array.prototype.forEach.call(node.childNodes, function (child) {
      el.appendChild(sanitizeNode(child, doc));
    });

    return el;
  }

  function renderBotMessage(el, text) {
    var raw = String(text || '').trim();
    var template = document.createElement('template');
    template.innerHTML = raw;

    Array.prototype.forEach.call(template.content.childNodes, function (child) {
      el.appendChild(sanitizeNode(child, document));
    });

    if (!el.childNodes.length) {
      appendTextContent(el, raw);
    }
  }

  function addMessage(role, text) {
    var row = document.createElement('div');
    row.className = 'chat-row ' + role;

    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble ' + role;

    if (role === 'bot') {
      renderBotMessage(bubble, text);
    } else {
      bubble.textContent = text;
    }

    row.appendChild(bubble);
    msgContainer.appendChild(row);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return row;
  }

  function showTyping() {
    if (typingRow) return;

    typingRow = document.createElement('div');
    typingRow.className = 'chat-row bot';

    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    bubble.innerHTML = '<div class="chat-typing" aria-label="Thinking"><span></span><span></span><span></span></div>';

    typingRow.appendChild(bubble);
    msgContainer.appendChild(typingRow);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function removeTyping() {
    if (!typingRow) return;
    if (typingRow.parentNode) typingRow.parentNode.removeChild(typingRow);
    typingRow = null;
  }

  function showError(message) {
    errorEl.textContent = message || '';
    errorEl.hidden = !message;
  }

  function isMobileView() {
    return mobileMedia.matches;
  }

  function syncMobileState() {
    var mobile = isMobileView();

    document.body.classList.toggle('has-mobile-chat', mobile);
    sectionEl.classList.toggle('chat-collapsed', mobile && isMobileCollapsed);
    document.body.classList.toggle('chat-mobile-collapsed', mobile && isMobileCollapsed);
    panelBodyEl.hidden = mobile && isMobileCollapsed;
    mobileToggleEl.setAttribute('aria-expanded', mobile && isMobileCollapsed ? 'false' : 'true');
    mobileToggleEl.querySelector('span').textContent = mobile && isMobileCollapsed ? 'Open chat' : 'Minimize';
  }

  function openMobileChat(focusInput) {
    if (!isMobileView()) return;
    isMobileCollapsed = false;
    syncMobileState();
    if (focusInput) {
      inputEl.focus();
    }
  }

  function setLoading(value) {
    isLoading = value;
    inputEl.disabled = value;
    sendBtn.disabled = value || inputEl.value.trim() === '';
  }

  function buildSuggestions() {
    sugContainer.innerHTML = '';

    SUGGESTIONS.forEach(function (suggestion) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chat-chip';
      chip.textContent = suggestion;
      chip.addEventListener('click', function () {
        sendMessage(suggestion);
      });
      sugContainer.appendChild(chip);
    });
  }

  function sendMessage(text) {
    text = (text || inputEl.value || '').trim();
    if (!text || isLoading) return;

    inputEl.value = '';
    showError('');
    addMessage('user', text);
    history.push({ role: 'user', content: text });

    setLoading(true);
    showTyping();

    var payload = { message: text, history: history.slice(0, -1) };

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        removeTyping();
        setLoading(false);

        if (!result.ok || !result.data.reply) {
          showError(result.data.error || 'Something went wrong. Try again.');
          return;
        }

        addMessage('bot', result.data.reply);
        history.push({ role: 'assistant', content: result.data.reply });

        if (history.length > 40) {
          history = history.slice(-40);
        }
      })
      .catch(function () {
        removeTyping();
        setLoading(false);
        showError('Network error. Check your connection and try again.');
      });
  }

  formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessage();
  });

  inputEl.addEventListener('input', function () {
    sendBtn.disabled = isLoading || inputEl.value.trim() === '';
  });

  mobileToggleEl.addEventListener('click', function () {
    if (!isMobileView()) return;
    isMobileCollapsed = !isMobileCollapsed;
    syncMobileState();
    if (!isMobileCollapsed) {
      inputEl.focus();
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll('a[href="#ask-nico"]'), function (link) {
    link.addEventListener('click', function (event) {
      if (!isMobileView()) return;
      event.preventDefault();
      openMobileChat(true);
    });
  });

  function handleViewportChange() {
    if (!isMobileView()) {
      isMobileCollapsed = false;
    }
    syncMobileState();
  }

  if (typeof mobileMedia.addEventListener === 'function') {
    mobileMedia.addEventListener('change', handleViewportChange);
  } else if (typeof mobileMedia.addListener === 'function') {
    mobileMedia.addListener(handleViewportChange);
  }

  buildSuggestions();
  addMessage('bot', WELCOME);
  handleViewportChange();
  setLoading(false);
})();
