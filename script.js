// === SLIDER AUTOMÁTICO ===
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
  nextImage();
}, 5000); // troca de imagem a cada 5 segundos

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

// === HISTÓRIAS (mostrar/ocultar seção) ===
const btnHistorias = document.getElementById("btn-historias");
const sectionHistorias = document.getElementById("historias");

if (btnHistorias && sectionHistorias) {
  btnHistorias.addEventListener("click", (e) => {
    e.preventDefault();
    const visible = sectionHistorias.style.display === "block";
    sectionHistorias.style.display = visible ? "none" : "block";
    sectionHistorias.scrollIntoView({ behavior: "smooth" });
  });
}

// Impede abertura em nova guia
document.querySelectorAll('a').forEach(link => {
  link.removeAttribute('target');
});

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



