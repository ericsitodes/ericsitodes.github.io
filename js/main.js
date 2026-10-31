/* =================================================================
   CONFIG: TUS DATOS EN UN SOLO LUGAR
   Qué puedes modificar: todo este objeto. Los enlaces de WhatsApp,
   el correo y tu nombre en la página se generan desde aquí.
   whatsapp va con 52 (México) y sin espacios ni signos.
   ================================================================= */
const CONFIG = {
  estudio: 'Eleva Dev',
  responsable: 'Eric Jesús Leyva López',
  ubicacion: 'Coatzacoalcos, Veracruz, México',
  whatsapp: '529212223293',
  correo: 'eric.dev.soluciones@gmail.com',
  mensajeWhatsApp: 'Hola, vi tu página y me interesa un tablero para mi negocio.'
};

/* Arma un enlace de WhatsApp con el mensaje ya escrito */
function enlaceWhatsApp(mensaje) {
  return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(mensaje);
}

/* Enlaces de WhatsApp: usan data-mensaje si lo tienen, si no el mensaje por defecto */
document.querySelectorAll('[data-whatsapp]').forEach(function (enlace) {
  enlace.href = enlaceWhatsApp(enlace.dataset.mensaje || CONFIG.mensajeWhatsApp);
  enlace.target = '_blank';
  enlace.rel = 'noopener';
});

/* Correo */
document.querySelectorAll('[data-correo]').forEach(function (enlace) {
  enlace.href = 'mailto:' + CONFIG.correo;
  enlace.textContent = CONFIG.correo;
});

/* Textos que vienen de CONFIG (nombre del estudio, responsable y ubicación) */
document.querySelectorAll('[data-config]').forEach(function (elemento) {
  elemento.textContent = CONFIG[elemento.dataset.config];
});

/* Año actual del pie de página */
document.getElementById('anio').textContent = new Date().getFullYear();

/* Menú hamburguesa: abre, cierra al elegir un enlace y cierra con Esc */
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-principal');

function cambiarMenu(abierto) {
  menu.classList.toggle('is-open', abierto);
  botonMenu.setAttribute('aria-expanded', String(abierto));
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
}

botonMenu.addEventListener('click', function () {
  cambiarMenu(!menu.classList.contains('is-open'));
});
menu.addEventListener('click', function (evento) {
  if (evento.target.closest('a')) cambiarMenu(false);
});
document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && menu.classList.contains('is-open')) {
    cambiarMenu(false);
    botonMenu.focus();
  }
});

/* Animaciones al aparecer en pantalla: fade de secciones y crecimiento de barras */
const elementos = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });
  elementos.forEach(function (elemento) { observador.observe(elemento); });
} else {
  elementos.forEach(function (elemento) { elemento.classList.add('is-visible'); });
}
