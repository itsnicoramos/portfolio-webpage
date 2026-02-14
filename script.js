// Dynamic year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

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

// ========== Tech Marquee (auto-duplicate for seamless loop) ==========
(function() {
  var track = document.querySelector('.tech-marquee-track');
  if (!track) return;
  var items = track.innerHTML;
  track.innerHTML = items + items;
})();

// ========== Scroll-Triggered Fade-In Animations ==========
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
