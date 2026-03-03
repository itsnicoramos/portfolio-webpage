// Dynamic year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ========== Language Selector ==========
var LANGUAGES = [
  { code: 'en',       label: 'EN',  flag: '🇺🇸', name: 'English' },
  { code: 'af',       label: 'AF',  flag: '🇿🇦', name: 'Afrikaans' },
  { code: 'sq',       label: 'SQ',  flag: '🇦🇱', name: 'Albanian' },
  { code: 'am',       label: 'AM',  flag: '🇪🇹', name: 'Amharic' },
  { code: 'ar',       label: 'AR',  flag: '🇸🇦', name: 'Arabic' },
  { code: 'hy',       label: 'HY',  flag: '🇦🇲', name: 'Armenian' },
  { code: 'as',       label: 'AS',  flag: '🇮🇳', name: 'Assamese' },
  { code: 'ay',       label: 'AY',  flag: '🇧🇴', name: 'Aymara' },
  { code: 'az',       label: 'AZ',  flag: '🇦🇿', name: 'Azerbaijani' },
  { code: 'bm',       label: 'BM',  flag: '🇲🇱', name: 'Bambara' },
  { code: 'eu',       label: 'EU',  flag: '🏳️',  name: 'Basque' },
  { code: 'be',       label: 'BE',  flag: '🇧🇾', name: 'Belarusian' },
  { code: 'bn',       label: 'BN',  flag: '🇧🇩', name: 'Bengali' },
  { code: 'bho',      label: 'BHO', flag: '🇮🇳', name: 'Bhojpuri' },
  { code: 'bs',       label: 'BS',  flag: '🇧🇦', name: 'Bosnian' },
  { code: 'bg',       label: 'BG',  flag: '🇧🇬', name: 'Bulgarian' },
  { code: 'ca',       label: 'CA',  flag: '🏳️',  name: 'Catalan' },
  { code: 'ceb',      label: 'CEB', flag: '🇵🇭', name: 'Cebuano' },
  { code: 'zh-CN',    label: '中文', flag: '🇨🇳', name: 'Chinese (Simplified)' },
  { code: 'zh-TW',    label: '繁中', flag: '🇹🇼', name: 'Chinese (Traditional)' },
  { code: 'co',       label: 'CO',  flag: '🇫🇷', name: 'Corsican' },
  { code: 'hr',       label: 'HR',  flag: '🇭🇷', name: 'Croatian' },
  { code: 'cs',       label: 'CS',  flag: '🇨🇿', name: 'Czech' },
  { code: 'da',       label: 'DA',  flag: '🇩🇰', name: 'Danish' },
  { code: 'dv',       label: 'DV',  flag: '🇲🇻', name: 'Dhivehi' },
  { code: 'doi',      label: 'DOI', flag: '🇮🇳', name: 'Dogri' },
  { code: 'nl',       label: 'NL',  flag: '🇳🇱', name: 'Dutch' },
  { code: 'eo',       label: 'EO',  flag: '🌍',  name: 'Esperanto' },
  { code: 'et',       label: 'ET',  flag: '🇪🇪', name: 'Estonian' },
  { code: 'ee',       label: 'EE',  flag: '🇬🇭', name: 'Ewe' },
  { code: 'fil',      label: 'FIL', flag: '🇵🇭', name: 'Filipino' },
  { code: 'fi',       label: 'FI',  flag: '🇫🇮', name: 'Finnish' },
  { code: 'fr',       label: 'FR',  flag: '🇫🇷', name: 'French' },
  { code: 'fy',       label: 'FY',  flag: '🇳🇱', name: 'Frisian' },
  { code: 'gl',       label: 'GL',  flag: '🇪🇸', name: 'Galician' },
  { code: 'ka',       label: 'KA',  flag: '🇬🇪', name: 'Georgian' },
  { code: 'de',       label: 'DE',  flag: '🇩🇪', name: 'German' },
  { code: 'el',       label: 'EL',  flag: '🇬🇷', name: 'Greek' },
  { code: 'gn',       label: 'GN',  flag: '🇵🇾', name: 'Guarani' },
  { code: 'gu',       label: 'GU',  flag: '🇮🇳', name: 'Gujarati' },
  { code: 'ht',       label: 'HT',  flag: '🇭🇹', name: 'Haitian Creole' },
  { code: 'ha',       label: 'HA',  flag: '🇳🇬', name: 'Hausa' },
  { code: 'haw',      label: 'HAW', flag: '🇺🇸', name: 'Hawaiian' },
  { code: 'iw',       label: 'HE',  flag: '🇮🇱', name: 'Hebrew' },
  { code: 'hi',       label: 'HI',  flag: '🇮🇳', name: 'Hindi' },
  { code: 'hmn',      label: 'HMN', flag: '🏳️',  name: 'Hmong' },
  { code: 'hu',       label: 'HU',  flag: '🇭🇺', name: 'Hungarian' },
  { code: 'is',       label: 'IS',  flag: '🇮🇸', name: 'Icelandic' },
  { code: 'ig',       label: 'IG',  flag: '🇳🇬', name: 'Igbo' },
  { code: 'ilo',      label: 'ILO', flag: '🇵🇭', name: 'Ilocano' },
  { code: 'id',       label: 'ID',  flag: '🇮🇩', name: 'Indonesian' },
  { code: 'ga',       label: 'GA',  flag: '🇮🇪', name: 'Irish' },
  { code: 'it',       label: 'IT',  flag: '🇮🇹', name: 'Italian' },
  { code: 'ja',       label: 'JA',  flag: '🇯🇵', name: 'Japanese' },
  { code: 'jv',       label: 'JV',  flag: '🇮🇩', name: 'Javanese' },
  { code: 'kn',       label: 'KN',  flag: '🇮🇳', name: 'Kannada' },
  { code: 'kk',       label: 'KK',  flag: '🇰🇿', name: 'Kazakh' },
  { code: 'km',       label: 'KM',  flag: '🇰🇭', name: 'Khmer' },
  { code: 'rw',       label: 'RW',  flag: '🇷🇼', name: 'Kinyarwanda' },
  { code: 'gom',      label: 'KOK', flag: '🇮🇳', name: 'Konkani' },
  { code: 'ko',       label: 'KO',  flag: '🇰🇷', name: 'Korean' },
  { code: 'kri',      label: 'KRI', flag: '🇸🇱', name: 'Krio' },
  { code: 'ku',       label: 'KU',  flag: '🏳️',  name: 'Kurdish (Kurmanji)' },
  { code: 'ckb',      label: 'CKB', flag: '🏳️',  name: 'Kurdish (Sorani)' },
  { code: 'ky',       label: 'KY',  flag: '🇰🇬', name: 'Kyrgyz' },
  { code: 'lo',       label: 'LO',  flag: '🇱🇦', name: 'Lao' },
  { code: 'la',       label: 'LA',  flag: '🏛️',  name: 'Latin' },
  { code: 'lv',       label: 'LV',  flag: '🇱🇻', name: 'Latvian' },
  { code: 'ln',       label: 'LN',  flag: '🇨🇩', name: 'Lingala' },
  { code: 'lt',       label: 'LT',  flag: '🇱🇹', name: 'Lithuanian' },
  { code: 'lg',       label: 'LG',  flag: '🇺🇬', name: 'Luganda' },
  { code: 'lb',       label: 'LB',  flag: '🇱🇺', name: 'Luxembourgish' },
  { code: 'mk',       label: 'MK',  flag: '🇲🇰', name: 'Macedonian' },
  { code: 'mai',      label: 'MAI', flag: '🇮🇳', name: 'Maithili' },
  { code: 'mg',       label: 'MG',  flag: '🇲🇬', name: 'Malagasy' },
  { code: 'ms',       label: 'MS',  flag: '🇲🇾', name: 'Malay' },
  { code: 'ml',       label: 'ML',  flag: '🇮🇳', name: 'Malayalam' },
  { code: 'mt',       label: 'MT',  flag: '🇲🇹', name: 'Maltese' },
  { code: 'mi',       label: 'MI',  flag: '🇳🇿', name: 'Maori' },
  { code: 'mr',       label: 'MR',  flag: '🇮🇳', name: 'Marathi' },
  { code: 'mni-Mtei', label: 'MNI', flag: '🇮🇳', name: 'Meitei (Manipuri)' },
  { code: 'lus',      label: 'LUS', flag: '🇮🇳', name: 'Mizo' },
  { code: 'mn',       label: 'MN',  flag: '🇲🇳', name: 'Mongolian' },
  { code: 'my',       label: 'MY',  flag: '🇲🇲', name: 'Myanmar (Burmese)' },
  { code: 'ne',       label: 'NE',  flag: '🇳🇵', name: 'Nepali' },
  { code: 'no',       label: 'NO',  flag: '🇳🇴', name: 'Norwegian' },
  { code: 'ny',       label: 'NY',  flag: '🇲🇼', name: 'Nyanja (Chichewa)' },
  { code: 'or',       label: 'OR',  flag: '🇮🇳', name: 'Odia (Oriya)' },
  { code: 'om',       label: 'OM',  flag: '🇪🇹', name: 'Oromo' },
  { code: 'ps',       label: 'PS',  flag: '🇦🇫', name: 'Pashto' },
  { code: 'fa',       label: 'FA',  flag: '🇮🇷', name: 'Persian' },
  { code: 'pl',       label: 'PL',  flag: '🇵🇱', name: 'Polish' },
  { code: 'pt',       label: 'PT',  flag: '🇧🇷', name: 'Portuguese' },
  { code: 'pa',       label: 'PA',  flag: '🇮🇳', name: 'Punjabi' },
  { code: 'qu',       label: 'QU',  flag: '🇵🇪', name: 'Quechua' },
  { code: 'ro',       label: 'RO',  flag: '🇷🇴', name: 'Romanian' },
  { code: 'ru',       label: 'RU',  flag: '🇷🇺', name: 'Russian' },
  { code: 'sm',       label: 'SM',  flag: '🇼🇸', name: 'Samoan' },
  { code: 'sa',       label: 'SA',  flag: '🇮🇳', name: 'Sanskrit' },
  { code: 'gd',       label: 'GD',  flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', name: 'Scots Gaelic' },
  { code: 'nso',      label: 'NSO', flag: '🇿🇦', name: 'Sepedi' },
  { code: 'sr',       label: 'SR',  flag: '🇷🇸', name: 'Serbian' },
  { code: 'st',       label: 'ST',  flag: '🇱🇸', name: 'Sesotho' },
  { code: 'sn',       label: 'SN',  flag: '🇿🇼', name: 'Shona' },
  { code: 'sd',       label: 'SD',  flag: '🇵🇰', name: 'Sindhi' },
  { code: 'si',       label: 'SI',  flag: '🇱🇰', name: 'Sinhala' },
  { code: 'sk',       label: 'SK',  flag: '🇸🇰', name: 'Slovak' },
  { code: 'sl',       label: 'SL',  flag: '🇸🇮', name: 'Slovenian' },
  { code: 'so',       label: 'SO',  flag: '🇸🇴', name: 'Somali' },
  { code: 'es',       label: 'ES',  flag: '🇪🇸', name: 'Spanish' },
  { code: 'su',       label: 'SU',  flag: '🇮🇩', name: 'Sundanese' },
  { code: 'sw',       label: 'SW',  flag: '🇰🇪', name: 'Swahili' },
  { code: 'sv',       label: 'SV',  flag: '🇸🇪', name: 'Swedish' },
  { code: 'tl',       label: 'TL',  flag: '🇵🇭', name: 'Tagalog' },
  { code: 'tg',       label: 'TG',  flag: '🇹🇯', name: 'Tajik' },
  { code: 'ta',       label: 'TA',  flag: '🇮🇳', name: 'Tamil' },
  { code: 'tt',       label: 'TT',  flag: '🇷🇺', name: 'Tatar' },
  { code: 'te',       label: 'TE',  flag: '🇮🇳', name: 'Telugu' },
  { code: 'th',       label: 'TH',  flag: '🇹🇭', name: 'Thai' },
  { code: 'ti',       label: 'TI',  flag: '🇪🇷', name: 'Tigrinya' },
  { code: 'ts',       label: 'TS',  flag: '🇿🇦', name: 'Tsonga' },
  { code: 'tr',       label: 'TR',  flag: '🇹🇷', name: 'Turkish' },
  { code: 'tk',       label: 'TK',  flag: '🇹🇲', name: 'Turkmen' },
  { code: 'ak',       label: 'AK',  flag: '🇬🇭', name: 'Twi' },
  { code: 'uk',       label: 'UK',  flag: '🇺🇦', name: 'Ukrainian' },
  { code: 'ur',       label: 'UR',  flag: '🇵🇰', name: 'Urdu' },
  { code: 'ug',       label: 'UG',  flag: '🏳️',  name: 'Uyghur' },
  { code: 'uz',       label: 'UZ',  flag: '🇺🇿', name: 'Uzbek' },
  { code: 'vi',       label: 'VI',  flag: '🇻🇳', name: 'Vietnamese' },
  { code: 'cy',       label: 'CY',  flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', name: 'Welsh' },
  { code: 'xh',       label: 'XH',  flag: '🇿🇦', name: 'Xhosa' },
  { code: 'yi',       label: 'YI',  flag: '🏳️',  name: 'Yiddish' },
  { code: 'yo',       label: 'YO',  flag: '🇳🇬', name: 'Yoruba' },
  { code: 'zu',       label: 'ZU',  flag: '🇿🇦', name: 'Zulu' }
];

function getLangName(code) {
  for (var i = 0; i < LANGUAGES.length; i++) {
    if (LANGUAGES[i].code === code) return LANGUAGES[i].name;
  }
  return 'English';
}

function hideLangResults() {
  var results = document.getElementById('lang-results');
  if (results) {
    results.classList.remove('open');
    results.innerHTML = '';
  }
}

function renderLanguages(query) {
  var results = document.getElementById('lang-results');
  if (!results) return;
  var currentLang = localStorage.getItem('preferred-lang') || 'en';
  var q = (query || '').toLowerCase().trim();
  results.innerHTML = '';
  if (!q) { results.classList.remove('open'); return; }
  var count = 0;
  LANGUAGES.forEach(function(lang) {
    if (!lang.name.toLowerCase().includes(q) && !lang.label.toLowerCase().includes(q)) return;
    var btn = document.createElement('button');
    btn.className = 'lang-option' + (lang.code === currentLang ? ' active' : '');
    btn.textContent = lang.flag + ' ' + lang.name;
    btn.onmousedown = function(e) { e.preventDefault(); };
    btn.onclick = function() { switchLanguage(lang.code, lang.name); };
    results.appendChild(btn);
    count++;
  });
  if (count === 0) {
    var msg = document.createElement('p');
    msg.className = 'lang-no-result';
    msg.textContent = 'No language found';
    results.appendChild(msg);
  }
  results.classList.toggle('open', count > 0);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false
  }, 'google_translate_element');

  var savedLang = localStorage.getItem('preferred-lang');
  if (savedLang && savedLang !== 'en') {
    setTimeout(function() {
      var select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event('change'));
      }
    }, 800);
  }
}

function switchLanguage(lang, name) {
  var input = document.getElementById('lang-search');
  if (input) {
    input.value = '';
    input.placeholder = 'Language: ' + name;
    input.blur();
  }
  hideLangResults();

  if (lang === 'en') {
    localStorage.removeItem('preferred-lang');
    localStorage.removeItem('preferred-lang-label');
    document.cookie = 'googtrans=; expires=' + new Date(0).toUTCString() + '; path=/';
    document.cookie = 'googtrans=; expires=' + new Date(0).toUTCString() + '; path=/; domain=.' + location.hostname;
    location.reload();
    return;
  }

  localStorage.setItem('preferred-lang', lang);
  localStorage.setItem('preferred-lang-label', name);

  var attempts = 0;
  function tryTranslate() {
    var select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    } else if (attempts < 15) {
      attempts++;
      setTimeout(tryTranslate, 300);
    }
  }
  tryTranslate();
}

document.addEventListener('click', function(e) {
  var widget = document.getElementById('lang-search-widget');
  if (widget && !widget.contains(e.target)) hideLangResults();
});

(function() {
  var input = document.getElementById('lang-search');
  if (!input) return;
  var savedLang = localStorage.getItem('preferred-lang');
  var savedName = localStorage.getItem('preferred-lang-label');
  if (savedLang && savedName) input.placeholder = 'Language: ' + savedName;
  input.addEventListener('input', function() { renderLanguages(this.value); });
  input.addEventListener('blur', function() { setTimeout(hideLangResults, 120); });
})();

// Kill Google Translate banner as soon as it appears
(function() {
  function killGTBanner() {
    var banner = document.querySelector('.goog-te-banner-frame');
    if (banner) banner.style.cssText = 'display:none!important;visibility:hidden!important;';
    if (document.body && document.body.style.top && document.body.style.top !== '0px') {
      document.body.style.top = '0';
    }
  }
  if (document.body) {
    new MutationObserver(killGTBanner).observe(document.body, {
      childList: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  }
})();

// ========== Theme Toggle ==========
function toggleTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon();
} 

function updateThemeIcon() {
  var icon = document.getElementById('themeIcon');
  if (!icon) return;
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
  if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    updateThemeIcon();
  }
});

updateThemeIcon();

// ========== Mobile Menu Toggle ==========
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

// ========== Three.js Hero Particle Scene ==========
(function() {
  'use strict';

  function initScene() {
    if (typeof THREE === 'undefined') {
      setTimeout(initScene, 100);
      return;
    }

    var canvas = document.getElementById('hero-canvas');
    var heroSection = document.getElementById('home');
    if (!canvas || !heroSection) return;

    // Device detection
    var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    var isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : isMobile;

    // Configuration
    var config = {
      particleCount: isLowEnd ? 250 : 800,
      showLines: !isMobile,
      maxLineDistance: 120,
      maxLines: 150,
      pixelRatio: isMobile ? 1 : Math.min(window.devicePixelRatio, 2),
      mouseParallax: !isMobile,
      rotationSpeed: 0.0003,
      particleSize: isMobile ? 2.5 : 2,
      spreadX: 800,
      spreadY: 500,
      spreadZ: 400,
      targetFPS: isMobile ? 30 : 60
    };

    // Renderer
    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(config.pixelRatio);
    renderer.setSize(heroSection.offsetWidth, heroSection.offsetHeight);
    renderer.setClearColor(0x000000, 0);

    // Scene & Camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      60,
      heroSection.offsetWidth / heroSection.offsetHeight,
      1,
      2000
    );
    camera.position.z = 600;

    // Read theme colors
    function getThemeColor() {
      var style = getComputedStyle(document.documentElement);
      var color = style.getPropertyValue('--text-muted').trim();
      return new THREE.Color(color || '#94a3b8');
    }

    // Particles
    var positions = new Float32Array(config.particleCount * 3);
    var velocities = new Float32Array(config.particleCount * 3);

    for (var i = 0; i < config.particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * config.spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * config.spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * config.spreadZ;

      velocities[i * 3]     = (Math.random() - 0.5) * 0.3;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    var particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    var themeColor = getThemeColor();

    var particleMaterial = new THREE.PointsMaterial({
      color: themeColor,
      size: config.particleSize,
      transparent: true,
      opacity: 0,
      sizeAttenuation: true
    });

    var particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Connection lines (desktop only)
    var linesMesh = null;
    var lineGeometry = null;

    if (config.showLines) {
      lineGeometry = new THREE.BufferGeometry();
      var lineMaterial = new THREE.LineBasicMaterial({
        color: themeColor,
        transparent: true,
        opacity: 0
      });
      var linePositions = new Float32Array(config.maxLines * 6);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setDrawRange(0, 0);
      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);
    }

    // Mouse tracking
    var mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    if (config.mouseParallax) {
      heroSection.addEventListener('mousemove', function(e) {
        var rect = heroSection.getBoundingClientRect();
        mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
        mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
      });
    }

    // Animation state
    var isAnimating = true;
    var fadeProgress = 0;
    var lastFrameTime = 0;
    var frameInterval = 1000 / config.targetFPS;

    // Pause when hero is out of view
    var heroObserver = new IntersectionObserver(function(entries) {
      isAnimating = entries[0].isIntersecting;
    }, { threshold: 0 });
    heroObserver.observe(heroSection);

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        isAnimating = false;
      } else {
        var rect = heroSection.getBoundingClientRect();
        isAnimating = rect.bottom > 0 && rect.top < window.innerHeight;
      }
    });

    // Theme change hook
    var originalToggleTheme = window.toggleTheme;
    window.toggleTheme = function() {
      originalToggleTheme();
      requestAnimationFrame(function() {
        themeColor = getThemeColor();
        particleMaterial.color.copy(themeColor);
        if (linesMesh) {
          linesMesh.material.color.copy(themeColor);
        }
      });
    };

    // Resize handler
    var resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        var w = heroSection.offsetWidth;
        var h = heroSection.offsetHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }, 150);
    });

    // Animation loop
    function animate(currentTime) {
      requestAnimationFrame(animate);

      if (!isAnimating) return;

      // Frame rate limiting
      if (currentTime - lastFrameTime < frameInterval) return;
      lastFrameTime = currentTime;

      // Fade-in effect
      if (fadeProgress < 1) {
        fadeProgress += 0.012;
        if (fadeProgress > 1) fadeProgress = 1;
        particleMaterial.opacity = fadeProgress * 0.6;
        if (linesMesh) linesMesh.material.opacity = fadeProgress * 0.15;
      }

      // Mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate particle group
      particles.rotation.x += config.rotationSpeed;
      particles.rotation.y += config.rotationSpeed * 0.7;

      // Apply mouse offset
      if (config.mouseParallax) {
        particles.position.x = mouse.x;
        particles.position.y = -mouse.y;
      }

      // Update particle positions
      var posArray = particleGeometry.attributes.position.array;
      for (var i = 0; i < config.particleCount; i++) {
        posArray[i * 3]     += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];

        if (Math.abs(posArray[i * 3])     > config.spreadX / 2) velocities[i * 3]     *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > config.spreadY / 2) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > config.spreadZ / 2) velocities[i * 3 + 2] *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update connection lines (desktop only)
      if (linesMesh && lineGeometry) {
        var lp = lineGeometry.attributes.position.array;
        var lineIndex = 0;
        var lineCount = 0;
        var maxDistSq = config.maxLineDistance * config.maxLineDistance;
        var checkCount = Math.min(config.particleCount, 200);

        for (var a = 0; a < checkCount && lineCount < config.maxLines; a++) {
          for (var b = a + 1; b < checkCount && lineCount < config.maxLines; b++) {
            var dx = posArray[a * 3]     - posArray[b * 3];
            var dy = posArray[a * 3 + 1] - posArray[b * 3 + 1];
            var dz = posArray[a * 3 + 2] - posArray[b * 3 + 2];
            var distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < maxDistSq) {
              lp[lineIndex++] = posArray[a * 3];
              lp[lineIndex++] = posArray[a * 3 + 1];
              lp[lineIndex++] = posArray[a * 3 + 2];
              lp[lineIndex++] = posArray[b * 3];
              lp[lineIndex++] = posArray[b * 3 + 1];
              lp[lineIndex++] = posArray[b * 3 + 2];
              lineCount++;
            }
          }
        }

        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineCount * 2);
      }

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animate);
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      if (window.requestIdleCallback) {
        requestIdleCallback(initScene);
      } else {
        setTimeout(initScene, 200);
      }
    });
  } else {
    if (window.requestIdleCallback) {
      requestIdleCallback(initScene);
    } else {
      setTimeout(initScene, 200);
    }
  }
})();


(function() {
  var track = document.querySelector('.tech-marquee-track');
  if (!track) return;
  var items = track.innerHTML;
  track.innerHTML = items + items;
})();


(function() {
  'use strict';

  // Fallback if IntersectionObserver not supported
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.scroll-fade').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-fade').forEach(function(el) {
    observer.observe(el);
  });
})();
