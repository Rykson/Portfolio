document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");
  const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

  if (projetos.length === 0) {
    container.innerHTML = "<p>Nenhum projeto adicionado ainda.</p>";
    return;
  }

  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "projeto-card";
    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;
    container.appendChild(card);
  });
});

// Animação de scroll
const fadeEls = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Cursor personalizado
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Loader (removido após tempo)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.remove(), 3000);
  }
});