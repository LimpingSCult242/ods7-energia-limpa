// === EFEITO DE ENTRADA ===
const fadeSections = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fadeSections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 120) {
      section.classList.add('visible');
    }
  });
});

// === BOTÃO VOLTAR AO TOPO ===
const btnTop = document.createElement('button');
btnTop.id = 'btn-top';
btnTop.innerHTML = '↑';
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === CARROSSEL DE IMAGENS DO HERO ===
const slides = document.querySelectorAll('.hero-bg .slide');
let index = 0;

function trocarSlide() {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  index = (index + 1) % slides.length;
}

// Mostra o primeiro imediatamente
trocarSlide();

// Troca a cada 5 segundos
setInterval(trocarSlide, 5000);

// === MODO CLARO / ESCURO ===
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.type = 'button';
themeToggle.setAttribute('aria-label', 'Alternar modo claro e escuro');
document.body.appendChild(themeToggle);

function updateThemeButton() {
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️ Claro' : '🌙 Escuro';
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

updateThemeButton();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateThemeButton();
});
