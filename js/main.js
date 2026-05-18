/* REAA.TN — main.js */

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.pillar, .research-card, .partner-card, .about-text, .contact-text, .contact-form'
).forEach(el => observer.observe(el));

// Contact form — basic UX (no backend; swap for Formspree/EmailJS)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';
    status.style.color = '';

    // Simulate submission (replace with real fetch to your endpoint)
    await new Promise(r => setTimeout(r, 1200));

    btn.disabled = false;
    btn.textContent = 'Send message';
    status.style.color = '#1D9E75';
    status.textContent = 'Thank you — we will respond within 48 hours.';
    form.reset();

    setTimeout(() => { status.textContent = ''; }, 6000);
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--navy)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));
