
const WHATSAPP = '34679180312';

// ===== Enlaces de WhatsApp =====

document.querySelectorAll('.js-wa').forEach((link) => {
  const msg = encodeURIComponent(link.dataset.msg || 'Hola V3D Creacions');
  link.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

// ===== Animación al hacer scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Menú móvil =====
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const abierto = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', abierto);
});

menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

// ===== Año del footer =====
document.getElementById('year').textContent = new Date().getFullYear();
