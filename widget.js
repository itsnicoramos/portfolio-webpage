(function () {
  'use strict';

  var scriptEl = document.currentScript ||
    document.querySelector('script[src*="widget.js"]');
  var API_BASE = (scriptEl && scriptEl.getAttribute('data-api')) ||
    window.location.origin;
  var CHAT_ENDPOINT = API_BASE.replace(/\/$/, '') + '/.netlify/functions/chat';
  var TRANSCRIBE_ENDPOINT = API_BASE.replace(/\/$/, '') + '/.netlify/functions/transcribe';
  var DEFAULT_VOICE_STATUS = 'Type a message or tap the mic to speak.';

  var SUGGESTIONS = [
    'What tech stack do you use?',
    'What are you building right now?',
    'How can I reach you?',
  ];

  var panelEl = document.getElementById('chat-panel');
  var toggleBtn = document.getElementById('chat-toggle');
  var closeBtn = document.getElementById('chat-close');
  var msgContainer = document.getElementById('chat-messages');
  var inputEl = document.getElementById('chat-input');
  var sendBtn = document.getElementById('chat-send');
  var formEl = document.getElementById('chat-form');
  var sugContainer = document.getElementById('chat-suggestions');
  var errorEl = document.getElementById('chat-error');
  var voiceBtn = document.getElementById('chat-voice');
  var voiceStatusEl = document.getElementById('chat-voice-status');

  if (!panelEl || !toggleBtn || !closeBtn || !msgContainer || !inputEl || !sendBtn || !formEl || !sugContainer || !errorEl || !voiceBtn || !voiceStatusEl) {
    return;
  }

  var isPanelOpen = false;
  var history = [];
  var isLoading = false;
  var isRecording = false;
  var isTranscribing = false;
  var typingRow = null;
  var mediaRecorder = null;
  var mediaStream = null;
  var audioChunks = [];
  var canRecordAudio = !!(
    window.navigator &&
    navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    window.MediaRecorder
  );

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

  function setVoiceStatus(message) {
    voiceStatusEl.textContent = message || '';
    voiceStatusEl.hidden = !message;
  }

  function syncControls() {
    inputEl.disabled = isLoading || isRecording || isTranscribing;
    sendBtn.disabled = isLoading || isRecording || isTranscribing || inputEl.value.trim() === '';
    voiceBtn.disabled = !canRecordAudio || isLoading || isTranscribing;
    voiceBtn.classList.toggle('is-recording', isRecording);
    voiceBtn.setAttribute('aria-pressed', isRecording ? 'true' : 'false');
    voiceBtn.setAttribute('aria-label', isRecording ? 'Stop recording and send voice message' : 'Record a voice message');
  }

  function setLoading(value) {
    isLoading = value;
    syncControls();
  }

  function buildSuggestions() {
    sugContainer.innerHTML = '';

    SUGGESTIONS.forEach(function (suggestion) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chat-chip';
      chip.textContent = suggestion;
      chip.addEventListener('click', function () {
        openChat(false);
        sendMessage(suggestion);
      });
      sugContainer.appendChild(chip);
    });
  }

  function sendMessage(text) {
    text = (text || inputEl.value || '').trim();
    if (!text || isLoading || isRecording || isTranscribing) return;

    inputEl.value = '';
    showError('');
    sugContainer.hidden = true;
    addMessage('user', text);
    history.push({ role: 'user', content: text });

    setLoading(true);
    showTyping();

    var payload = { message: text, history: history.slice(0, -1) };

    fetch(CHAT_ENDPOINT, {
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

  function getPreferredMimeType() {
    var candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/mp4',
      'audio/ogg;codecs=opus',
      'audio/wav',
    ];

    if (!window.MediaRecorder || typeof MediaRecorder.isTypeSupported !== 'function') {
      return '';
    }

    for (var i = 0; i < candidates.length; i += 1) {
      if (MediaRecorder.isTypeSupported(candidates[i])) {
        return candidates[i];
      }
    }

    return '';
  }

  function stopMediaStream() {
    if (!mediaStream) return;

    mediaStream.getTracks().forEach(function (track) {
      track.stop();
    });
    mediaStream = null;
  }

  function blobToDataUrl(blob) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onload = function () {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          return;
        }
        reject(new Error('Could not read the audio recording.'));
      };

      reader.onerror = function () {
        reject(new Error('Could not read the audio recording.'));
      };

      reader.readAsDataURL(blob);
    });
  }

  function finishTranscription() {
    isTranscribing = false;
    syncControls();
  }

  function transcribeAndSend(blob) {
    showError('');

    blobToDataUrl(blob)
      .then(function (dataUrl) {
        return fetch(TRANSCRIBE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            audioBase64: dataUrl,
            mimeType: blob.type || 'audio/webm',
          }),
        });
      })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.ok || !result.data.text) {
          throw new Error(result.data.error || 'Voice transcription failed. Try again.');
        }

        setVoiceStatus('Sending voice message...');
        inputEl.value = result.data.text;
        syncControls();
        sendMessage(result.data.text);
        setVoiceStatus(DEFAULT_VOICE_STATUS);
        finishTranscription();
      })
      .catch(function (error) {
        setVoiceStatus(DEFAULT_VOICE_STATUS);
        showError(error && error.message ? error.message : 'Voice transcription failed. Try again.');
        finishTranscription();
      });
  }

  function startRecording() {
    if (!canRecordAudio) {
      setVoiceStatus('Voice input depends on microphone support in this browser.');
      showError('Voice input is not supported here. You can still type a message.');
      syncControls();
      return;
    }

    showError('');
    setVoiceStatus('Requesting microphone access...');

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function (stream) {
        var mimeType = getPreferredMimeType();
        var recorder;

        try {
          recorder = mimeType ? new MediaRecorder(stream, { mimeType: mimeType }) : new MediaRecorder(stream);
        } catch (error) {
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          setVoiceStatus(DEFAULT_VOICE_STATUS);
          showError('Microphone setup failed. Try typing instead.');
          return;
        }

        mediaStream = stream;
        mediaRecorder = recorder;
        audioChunks = [];

        recorder.addEventListener('dataavailable', function (event) {
          if (event.data && event.data.size > 0) {
            audioChunks.push(event.data);
          }
        });

        recorder.addEventListener('stop', function () {
          var blob;

          stopMediaStream();
          mediaRecorder = null;

          if (!audioChunks.length) {
            setVoiceStatus(DEFAULT_VOICE_STATUS);
            showError('No audio was captured. Try again.');
            finishTranscription();
            return;
          }

          blob = new Blob(audioChunks, { type: recorder.mimeType || mimeType || 'audio/webm' });
          audioChunks = [];
          transcribeAndSend(blob);
        });

        recorder.start();
        isRecording = true;
        syncControls();
        setVoiceStatus('Listening. Tap the mic again to send.');
      })
      .catch(function (error) {
        setVoiceStatus(DEFAULT_VOICE_STATUS);

        if (error && (error.name === 'NotAllowedError' || error.name === 'SecurityError')) {
          showError('Microphone access was blocked. Allow microphone access and try again.');
          return;
        }

        showError('Unable to access the microphone. Try typing instead.');
      });
  }

  function stopRecording() {
    if (!mediaRecorder || mediaRecorder.state === 'inactive') {
      return;
    }

    isRecording = false;
    isTranscribing = true;
    syncControls();
    setVoiceStatus('Transcribing your voice message...');
    mediaRecorder.stop();
  }

  formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessage();
  });

  inputEl.addEventListener('input', function () {
    syncControls();
  });

  function openPanel() {
    if (isPanelOpen) return;
    isPanelOpen = true;
    panelEl.style.display = 'flex';
    toggleBtn.setAttribute('aria-expanded', 'true');
    window.setTimeout(function () { inputEl.focus(); }, 0);
  }

  function closePanel() {
    isPanelOpen = false;
    panelEl.style.display = 'none';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openPanel);

  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('pointerdown', function (event) {
    if (!isPanelOpen) return;
    var sectionEl = document.getElementById('ask-nico');
    if (sectionEl && sectionEl.contains(event.target)) return;
    closePanel();
  });

  voiceBtn.addEventListener('click', function () {
    if (isRecording) {
      stopRecording();
      return;
    }

    startRecording();
  });

  buildSuggestions();
  syncControls();
})();
