(function () {
  'use strict';

  // ── Resolve API base from the script tag ─────────────────────────────────
  var scriptEl = document.currentScript ||
    document.querySelector('script[src*="widget.js"]');
  var API_BASE = (scriptEl && scriptEl.getAttribute('data-api')) ||
    window.location.origin;
  var ENDPOINT = API_BASE.replace(/\/$/, '') + '/.netlify/functions/chat';

  var SUGGESTIONS = [
    'What projects are you working on?',
    'What tech stack do you use?',
    'How can I reach you?',
  ];

  var WELCOME = "Hey! I'm an AI version of Nico. Ask me anything about my projects, skills, or how to connect 👋";

  // ── Shadow DOM host ───────────────────────────────────────────────────────
  var host = document.createElement('div');
  host.id = 'nico-chat-widget';
  host.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:2147483647;font-family:Inter,system-ui,sans-serif;';
  document.body.appendChild(host);

  var shadow = host.attachShadow({ mode: 'closed' });

  // ── Styles ────────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `
    *{box-sizing:border-box;margin:0;padding:0;}

    /* Fab button */
    #fab{
      width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;
      background:linear-gradient(135deg,#6366f1,#8b5cf6);
      color:#fff;font-size:22px;display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 20px rgba(99,102,241,.55);
      transition:transform .2s,box-shadow .2s;
      position:relative;
    }
    #fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(99,102,241,.7);}
    #fab svg{width:28px;height:28px;pointer-events:none;}

    @keyframes pulse{0%,100%{box-shadow:0 4px 20px rgba(99,102,241,.55);}
      50%{box-shadow:0 0 0 10px rgba(99,102,241,0);}}
    .pulse{animation:pulse .7s ease-in-out 3;}

    /* Panel */
    #panel{
      position:absolute;bottom:68px;right:0;
      width:360px;max-width:calc(100vw - 32px);
      background:rgba(15,15,25,.92);
      backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
      border:1px solid rgba(255,255,255,.10);
      border-radius:18px;
      box-shadow:0 24px 60px rgba(0,0,0,.65);
      display:flex;flex-direction:column;overflow:hidden;
      transform:translateY(12px) scale(.97);opacity:0;pointer-events:none;
      transition:transform .22s cubic-bezier(.22,.68,0,1.2),opacity .18s ease;
    }
    #panel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:all;}

    /* Header */
    #header{
      padding:14px 16px;
      background:linear-gradient(135deg,rgba(99,102,241,.25),rgba(139,92,246,.18));
      display:flex;align-items:center;gap:10px;
      border-bottom:1px solid rgba(255,255,255,.07);
    }
    #avatar{
      width:36px;height:36px;border-radius:50%;
      background:linear-gradient(135deg,#6366f1,#8b5cf6);
      display:flex;align-items:center;justify-content:center;
      font-size:16px;flex-shrink:0;
    }
    #header-text h3{font-size:.9rem;font-weight:700;color:#fff;line-height:1.1;}
    #header-text p{font-size:.72rem;color:rgba(255,255,255,.55);margin-top:2px;}
    #close-btn{
      margin-left:auto;background:none;border:none;cursor:pointer;
      color:rgba(255,255,255,.45);font-size:18px;line-height:1;
      transition:color .15s;padding:4px;
    }
    #close-btn:hover{color:#fff;}

    /* Messages */
    #messages{
      flex:1;overflow-y:auto;padding:14px;
      display:flex;flex-direction:column;gap:10px;
      max-height:320px;min-height:120px;
      scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.15) transparent;
    }
    #messages::-webkit-scrollbar{width:4px;}
    #messages::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);border-radius:4px;}

    .msg{max-width:85%;padding:9px 13px;border-radius:14px;font-size:.85rem;line-height:1.55;word-break:break-word;}
    .msg.bot{
      background:rgba(255,255,255,.07);color:rgba(255,255,255,.9);
      border-bottom-left-radius:4px;align-self:flex-start;
    }
    .msg.user{
      background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;
      border-bottom-right-radius:4px;align-self:flex-end;
    }

    /* Typing indicator */
    .typing{display:flex;align-items:center;gap:5px;padding:9px 13px;}
    .typing span{
      width:7px;height:7px;border-radius:50%;
      background:rgba(255,255,255,.4);
      animation:bounce .9s infinite;
    }
    .typing span:nth-child(2){animation-delay:.15s;}
    .typing span:nth-child(3){animation-delay:.3s;}
    @keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-5px);}}

    /* Suggestions */
    #suggestions{
      display:flex;flex-wrap:wrap;gap:6px;
      padding:8px 14px 4px;
    }
    .chip{
      background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
      color:rgba(255,255,255,.75);border-radius:20px;
      padding:5px 11px;font-size:.75rem;cursor:pointer;
      transition:background .15s,color .15s;white-space:nowrap;
    }
    .chip:hover{background:rgba(99,102,241,.35);color:#fff;border-color:#6366f1;}

    /* Input bar */
    #input-bar{
      display:flex;align-items:center;gap:8px;
      padding:10px 12px 12px;
      border-top:1px solid rgba(255,255,255,.07);
    }
    #input{
      flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);
      border-radius:24px;padding:9px 14px;
      color:#fff;font-size:.85rem;outline:none;
      transition:border-color .15s;
      font-family:inherit;
    }
    #input::placeholder{color:rgba(255,255,255,.3);}
    #input:focus{border-color:rgba(99,102,241,.6);}
    #send{
      width:36px;height:36px;border-radius:50%;border:none;cursor:pointer;
      background:linear-gradient(135deg,#6366f1,#8b5cf6);
      color:#fff;display:flex;align-items:center;justify-content:center;
      flex-shrink:0;transition:opacity .15s;
    }
    #send:disabled{opacity:.4;cursor:default;}
    #send svg{width:16px;height:16px;fill:currentColor;}

    /* Error */
    .err{color:#f87171;font-size:.78rem;padding:0 14px 8px;text-align:center;}
  `;
  shadow.appendChild(style);

  // ── FAB ───────────────────────────────────────────────────────────────────
  var fab = document.createElement('button');
  fab.id = 'fab';
  fab.setAttribute('aria-label', 'Chat with Nico\'s AI assistant');
  fab.innerHTML = '<svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1H33C35.8 1 38 3.2 38 6V23C38 25.8 35.8 28 33 28H22L15 36V28H7C4.2 28 2 25.8 2 23V6C2 3.2 4.2 1 7 1Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" stroke-linejoin="round"/><text x="20" y="16" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Inter,system-ui,-apple-system,sans-serif" font-size="13" font-weight="800" letter-spacing="0.3">N.</text></svg>';
  shadow.appendChild(fab);

  // ── Panel ─────────────────────────────────────────────────────────────────
  var panel = document.createElement('div');
  panel.id = 'panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Chat with Nico\'s AI assistant');
  panel.innerHTML = `
    <div id="header">
      <div id="avatar"><svg style="width:20px;height:20px;" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1H33C35.8 1 38 3.2 38 6V23C38 25.8 35.8 28 33 28H22L15 36V28H7C4.2 28 2 25.8 2 23V6C2 3.2 4.2 1 7 1Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.65)" stroke-width="1.5" stroke-linejoin="round"/><text x="20" y="16" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Inter,system-ui,-apple-system,sans-serif" font-size="13" font-weight="800" letter-spacing="0.3">N.</text></svg></div>
      <div id="header-text">
        <h3>Ask Nico's AI</h3>
      </div>
      <button id="close-btn" aria-label="Close chat">&times;</button>
    </div>
    <div id="messages" aria-live="polite"></div>
    <div id="suggestions"></div>
    <div id="input-bar">
      <input id="input" type="text" placeholder="Ask me anything…" maxlength="1000" autocomplete="off" />
      <button id="send" aria-label="Send message" disabled>
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  `;
  shadow.appendChild(panel);

  // ── DOM refs ──────────────────────────────────────────────────────────────
  var msgContainer  = shadow.getElementById('messages');
  var inputEl       = shadow.getElementById('input');
  var sendBtn       = shadow.getElementById('send');
  var closeBtn      = shadow.getElementById('close-btn');
  var sugContainer  = shadow.getElementById('suggestions');

  // ── State ─────────────────────────────────────────────────────────────────
  var history   = [];   // [{role:'user'|'assistant', content:string}]
  var isOpen    = false;
  var isLoading = false;

  // ── Helpers ───────────────────────────────────────────────────────────────
  function addMessage(role, text) {
    var el = document.createElement('div');
    el.className = 'msg ' + role;
    el.textContent = text;
    msgContainer.appendChild(el);
    msgContainer.scrollTop = msgContainer.scrollHeight;
    return el;
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'msg bot typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    el.id = 'typing-indicator';
    msgContainer.appendChild(el);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function removeTyping() {
    var t = shadow.getElementById('typing-indicator');
    if (t) t.remove();
  }

  function showError(msg) {
    var existing = shadow.querySelector('.err');
    if (existing) existing.remove();
    var el = document.createElement('p');
    el.className = 'err';
    el.textContent = msg;
    panel.insertBefore(el, shadow.getElementById('input-bar'));
    setTimeout(function () { if (el.parentNode) el.remove(); }, 5000);
  }

  function buildSuggestions() {
    sugContainer.innerHTML = '';
    SUGGESTIONS.forEach(function (s) {
      var chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = s;
      chip.addEventListener('click', function () {
        sugContainer.innerHTML = '';
        sendMessage(s);
      });
      sugContainer.appendChild(chip);
    });
  }

  function setLoading(val) {
    isLoading = val;
    sendBtn.disabled = val || inputEl.value.trim() === '';
    inputEl.disabled = val;
  }

  // ── Send message ──────────────────────────────────────────────────────────
  function sendMessage(text) {
    text = (text || inputEl.value).trim();
    if (!text || isLoading) return;

    inputEl.value = '';
    sendBtn.disabled = true;

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
      .then(function (res) { return res.json().then(function (d) { return { ok: res.ok, data: d }; }); })
      .then(function (r) {
        removeTyping();
        setLoading(false);
        if (!r.ok || !r.data.reply) {
          showError(r.data.error || 'Something went wrong. Try again.');
          return;
        }
        addMessage('bot', r.data.reply);
        history.push({ role: 'assistant', content: r.data.reply });
        // Keep history bounded
        if (history.length > 40) history = history.slice(-40);
      })
      .catch(function () {
        removeTyping();
        setLoading(false);
        showError('Network error — check your connection.');
      });
  }

  // ── Panel open / close ────────────────────────────────────────────────────
  function openPanel() {
    if (isOpen) return;
    isOpen = true;
    panel.classList.add('open');
    inputEl.focus();
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;
    panel.classList.remove('open');
    fab.focus();
  }

  // ── Initial welcome ───────────────────────────────────────────────────────
  addMessage('bot', WELCOME);
  buildSuggestions();

  // ── First-load pulse ──────────────────────────────────────────────────────
  if (!sessionStorage.getItem('nico-chat-seen')) {
    fab.classList.add('pulse');
    fab.addEventListener('animationend', function () {
      fab.classList.remove('pulse');
    }, { once: true });
    sessionStorage.setItem('nico-chat-seen', '1');
  }

  // ── Event listeners ───────────────────────────────────────────────────────
  fab.addEventListener('click', function () {
    isOpen ? closePanel() : openPanel();
  });

  closeBtn.addEventListener('click', closePanel);

  inputEl.addEventListener('input', function () {
    sendBtn.disabled = isLoading || inputEl.value.trim() === '';
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendBtn.addEventListener('click', function () { sendMessage(); });

  // Escape key closes panel
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) closePanel();
  });
})();
