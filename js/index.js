
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Organizacion, scrolling para una navegacion correcta hacia los links del nav

/* window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });

}); */



// Typing effecto para el h2 del section sobre-mi

const palabras = ["Agustín!", "Creativo!", "Colaborador!", "Desarrollador!", "Apasionado!", "Entusiasta!", "Programador!"];
let i = 0;
let j = 0;
let borrando = false;
const velocidad = 90;
const pausa = 1000;
const typingElement = document.getElementById("typing");

function typeEffect() {
    const palabra = palabras[i];

    if (!borrando) {
        typingElement.textContent = palabra.slice(0, j++);
        if (j > palabra.length) {
            borrando = true;
            setTimeout(typeEffect, pausa);
            return;
        }
    } else {
        typingElement.textContent = palabra.slice(0, j--);
        if (j < 0) {
            borrando = false;
            i = (i + 1) % palabras.length;
            j = 0;
        }
    }
    setTimeout(typeEffect, velocidad);
}

typeEffect();


// Script para duplicar las imágenes con scroll infinito

const track = document.querySelector('.carousel-track');
const clone = track.innerHTML;
track.innerHTML += clone;



// Script para el menu hamburguesa

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const mobileNavLinks = document.querySelectorAll('#nav-menu a');
  const MOBILE_Q = '(max-width: 768px)';

  navMenu.classList.remove('show');

  hamburger.addEventListener('click', (e) => {
    if (!window.matchMedia(MOBILE_Q).matches) return;
    navMenu.classList.toggle('show');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.classList.contains('show')) return;
    const path = e.composedPath ? e.composedPath() : (e.path || []);
    if (!path.includes(navMenu) && !path.includes(hamburger)) {
      navMenu.classList.remove('show');
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') navMenu.classList.remove('show');
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_Q).matches) {
      navMenu.classList.remove('show');
    }
  });
});






