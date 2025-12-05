// Set year dynamically
const now = new Date();
const footerYear = document.getElementById("year");
footerYear.textContent = now.getFullYear();

// Toggle mobile menu
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));

// Hero title animation
const title = document.getElementById("hero-title");
const text = "Hi, I’m Nico";

title.innerHTML = text
  .split("")
  .map((char, i) => `<span style="opacity:0; transition:opacity 0.3s ${i * 0.1}s">${char}</span>`)
  .join("");

window.addEventListener('load', () => {
  document.querySelectorAll("#hero-title span").forEach(span => {
    span.style.opacity = 1;
  });
});

// show subtitle after a delay
setTimeout(() => {
  document.getElementById("hero-subtitle").classList.add("visible");
}, text.length * 100);

const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.pageX + "px";
  cursorGlow.style.top = e.pageY + "px";
});

document.querySelectorAll(".projects-content li").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = -(y / rect.height - 0.5) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});

const reveals = document.querySelectorAll(".reveal");
reveals.forEach((el, i) => {
  el.style.transitionDelay = i * 0.15 + "s";
});

window.onload = () => {
  document.body.classList.add("loaded");
};

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (scrollY >= top) current = section.getAttribute("id");
    });

    navLinks.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  });
});

