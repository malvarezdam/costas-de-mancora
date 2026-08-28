// ===== Header scroll state =====
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
document.addEventListener('scroll', onScroll);
onScroll();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(section => sectionObserver.observe(section));

// ===== Hero slider =====
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
const prevBtn = document.getElementById('heroPrev');
const nextBtn = document.getElementById('heroNext');
let currentSlide = 0;
let slideTimer;

function goToSlide(index) {
  slides[currentSlide].classList.remove('is-active');
  dots[currentSlide].classList.remove('is-active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('is-active');
  dots[currentSlide].classList.add('is-active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoplay() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 6500);
}

if (slides.length) {
  prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });
  nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  dots.forEach(dot => dot.addEventListener('click', () => {
    goToSlide(Number(dot.dataset.slide));
    startAutoplay();
  }));
  startAutoplay();
}

// ===== Reveal on scroll =====
const revealTargets = document.querySelectorAll(
  '.about__content, .about__media, .carta__panel, .plato, .location__info, .location__map, .contact__card, .reservation-form, .reservations__text'
);
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => revealObserver.observe(el));

// ===== Carta tabs =====
const cartaTabs = document.querySelectorAll('.carta__tab');
const cartaPanels = document.querySelectorAll('.carta__panel');
cartaTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    cartaTabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    const target = tab.dataset.panel;
    cartaPanels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.panel === target));
  });
});

// ===== Reservation form -> WhatsApp =====
const WHATSAPP_NUMBER = '56958819204';
const reservationForm = document.getElementById('reservationForm');
const formHint = document.getElementById('formHint');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(reservationForm);
  const nombre = data.get('nombre').trim();
  const correo = data.get('correo').trim();
  const telefono = data.get('telefono').trim();
  const comentario = data.get('comentario').trim();

  const mensaje =
    `Hola, quisiera hacer una consulta en Costas de Máncora.%0A` +
    `Nombre: ${encodeURIComponent(nombre)}%0A` +
    `Correo: ${encodeURIComponent(correo)}` +
    (telefono ? `%0ATeléfono: ${encodeURIComponent(telefono)}` : '') +
    `%0AMensaje: ${encodeURIComponent(comentario)}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
  formHint.textContent = 'Te estamos redirigiendo a WhatsApp para enviar tu consulta...';
  window.open(url, '_blank', 'noopener');
  reservationForm.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
