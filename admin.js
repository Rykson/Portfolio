document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-projeto");
  const lista = document.getElementById("lista-projetos");

  function carregarProjetos() {
    lista.innerHTML = "";
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

    projetos.forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "projeto-card";
      card.innerHTML = `
        <h3>${p.titulo}</h3>
        <p>${p.descricao}</p>
        <a href="${p.link}" target="_blank">Ver Projeto</a><br><br>
        <button class="btn" onclick="removerProjeto(${i})" style="background:red;color:white;">Remover</button>
      `;
      lista.appendChild(card);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const link = document.getElementById("link").value.trim();

    if (titulo && descricao && link) {
      const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
      projetos.push({ titulo, descricao, link });
      localStorage.setItem("projetos", JSON.stringify(projetos));
      form.reset();
      carregarProjetos();
    }
  });

  window.removerProjeto = (index) => {
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
    projetos.splice(index, 1);
    localStorage.setItem("projetos", JSON.stringify(projetos));
    carregarProjetos();
  };

  carregarProjetos();
});
