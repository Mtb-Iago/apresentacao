const form = document.getElementById("contactForm");

// Função auxiliar para mostrar erro
const setError = (input, message) => {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message") || document.createElement("span");
  
  errorDisplay.className = "error-message";
  errorDisplay.innerText = message;
  errorDisplay.style.color = "#ef4444";
  errorDisplay.style.fontSize = "12px";
  errorDisplay.style.marginTop = "4px";

  if (!formGroup.querySelector(".error-message")) {
    formGroup.appendChild(errorDisplay);
  }
  
  formGroup.classList.add("error");
};

// Função auxiliar para remover erro
const setSuccess = (input) => {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");
  if (errorDisplay) {
    errorDisplay.remove();
  }
  formGroup.classList.remove("error");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // 1. Validação de Nome
  const name = form.name;
  if (name.value.trim().length < 3) {
    setError(name, "O nome deve ter pelo menos 3 caracteres.");
    isValid = false;
  } else {
    setSuccess(name);
  }

  // 2. Validação de Email (Regex básica)
  const email = form.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    setError(email, "Insira um e-mail válido.");
    isValid = false;
  } else {
    setSuccess(email);
  }

  // 3. Validação de Assunto (Select)
  const subject = form.subject;
  if (subject.value === "") {
    setError(subject, "Por favor, selecione um assunto.");
    isValid = false;
  } else {
    setSuccess(subject);
  }

  // Se tudo estiver OK, envia
  if (isValid) {
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    console.log("Dados validados:", values);
    alert("Formulário enviado com sucesso!");
    
    form.reset();
    // Limpa estados de sucesso/erro após reset
    document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
  }
});