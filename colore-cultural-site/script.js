(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const number = (window.COLORE_CONFIG?.whatsappNumber || "").replace(/\D/g, "");
    if (!number) {
      feedback.textContent = "O WhatsApp comercial ainda não foi configurado. Preencha o número em config.js antes de publicar o formulário.";
      return;
    }
    if (!/^\d{12,13}$/.test(number)) {
      feedback.textContent = "Confira o número configurado em config.js. Use código do país + DDD + telefone.";
      return;
    }

    const data = new FormData(form);
    const message = [
      "Olá! Tenho interesse em conversar com a Colore Cultural.",
      "",
      `Nome: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Empresa/organização: ${data.get("organization") || "Não informado"}`,
      `Interesse: ${data.get("interest")}`,
      "",
      `Mensagem: ${data.get("message")}`
    ].join("\n");

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    feedback.textContent = "Sua mensagem está pronta no WhatsApp. Revise e envie para concluir o contato.";
  });
})();
