document.addEventListener("DOMContentLoaded", () => {
  const triggerBtn = document.getElementById("admin-trigger");
  let digitando = false;
  let inputCodigo = "";
  const codigoCorreto = "bololo";

  Object.assign(triggerBtn.style, {
    background: "transparent",
    border: "none",
    outline: "none",
    position: "absolute",
    width: "40px",
    height: "40px",
    bottom: "10px",
    right: "10px",
    opacity: 0,
    cursor: "pointer",
    zIndex: 999,
  });

  triggerBtn.addEventListener("click", () => {
    inputCodigo = "";
    digitando = true;
    alert("Área protegida. Digite o código secreto no teclado...");
  });

  document.addEventListener("keydown", (e) => {
    if (!digitando) return;

    inputCodigo += e.key.toLowerCase();

    if (inputCodigo.length > 30) {
      inputCodigo = inputCodigo.slice(-30);
    }

    if (inputCodigo.includes(codigoCorreto)) {
      digitando = false;
      alert("Acesso liberado.");
      window.location.href = "admin.html";
    }
  });
});
