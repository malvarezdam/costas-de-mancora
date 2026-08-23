// ===== Header scroll state =====
const header = document.getElementById('header');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
};
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
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ===== Reveal on scroll =====
const revealTargets = document.querySelectorAll(
  '.about__content, .about__media, .dish, .feature, .gallery__item, .testimonial, .location__info, .location__map, .reservation-form, .reservations__text'
);
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// ===== Menu tabs =====
const menuTabs = document.querySelectorAll('.menu__tab');
const dishes = document.querySelectorAll('.dish');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    menuTabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    const category = tab.dataset.cat;
    dishes.forEach(dish => {
      dish.style.display = dish.dataset.cat === category ? 'flex' : 'none';
    });
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
  const telefono = data.get('telefono').trim();
  const fecha = data.get('fecha');
  const hora = data.get('hora');
  const personas = data.get('personas');
  const comentario = data.get('comentario').trim();

  const mensaje =
    `Hola, quisiera reservar una mesa en Costas de Máncora.%0A` +
    `Nombre: ${encodeURIComponent(nombre)}%0A` +
    `Teléfono: ${encodeURIComponent(telefono)}%0A` +
    `Fecha: ${encodeURIComponent(fecha)}%0A` +
    `Hora: ${encodeURIComponent(hora)}%0A` +
    `Personas: ${encodeURIComponent(personas)}` +
    (comentario ? `%0AComentario: ${encodeURIComponent(comentario)}` : '');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
  formHint.textContent = 'Te estamos redirigiendo a WhatsApp para confirmar tu reserva...';
  window.open(url, '_blank', 'noopener');
  reservationForm.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
