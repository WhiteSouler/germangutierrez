const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

function toggleMenu() {
  const p = document.getElementById('mobilePanel');
  p.style.display = p.style.display === 'block' ? 'none' : 'block';
}
function closeMenu() {
  document.getElementById('mobilePanel').style.display = 'none';
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

document.querySelectorAll('.services-grid, .projects-grid, .why-grid, .metrics-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => { child.style.transitionDelay = (i * 80) + 'ms'; });
});

function sendToWhatsApp(e) {
  e.preventDefault();
  const nombre   = document.getElementById('nombre').value.trim();
  const email    = document.getElementById('email').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje  = document.getElementById('mensaje').value.trim();
  if (!nombre || !email || !servicio || !mensaje) return;
  const text = [
    '¡Hola German! Me llegaste a través de tu portafolio.',
    '',
    `*Nombre:* ${nombre}`,
    `*Email:* ${email}`,
    `*Servicio de interés:* ${servicio}`,
    '',
    `*Mi proyecto:*`,
    mensaje
  ].join('\n');
  window.open('https://wa.me/573102310042?text=' + encodeURIComponent(text), '_blank');
}
