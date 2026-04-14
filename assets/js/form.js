const phoneInput = document.getElementById("phone");
const contactForm = document.getElementById("contactForm");
const formUrl = "https://formspree.io/f/meevqnwl";

const feedbackModal = document.getElementById("formFeedbackModal");
const feedbackTitle = document.getElementById("formFeedbackTitle");
const feedbackMessage = document.getElementById("formFeedbackMessage");
const feedbackIcon = feedbackModal?.querySelector(".form-modal__icon");

let feedbackModalKeyHandler = null;
let feedbackModalLastFocus = null;

function showFormFeedback({ title, message, variant }) {
    if (!feedbackModal || !feedbackTitle || !feedbackMessage) {
        window.alert(message);
        return;
    }

    feedbackModalLastFocus = document.activeElement;
    feedbackTitle.textContent = title;
    feedbackMessage.textContent = message;
    feedbackModal.classList.remove("form-modal--success", "form-modal--error");
    feedbackModal.classList.add(`form-modal--${variant}`);

    if (feedbackIcon) {
        feedbackIcon.className =
            "form-modal__icon fa-solid " +
            (variant === "success" ? "fa-circle-check" : "fa-circle-exclamation");
    }

    feedbackModal.hidden = false;
    document.body.classList.add("form-modal-open");
    feedbackModal.querySelector(".form-modal__close")?.focus();

    feedbackModalKeyHandler = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            hideFormFeedback();
        }
    };
    document.addEventListener("keydown", feedbackModalKeyHandler);
}

function hideFormFeedback() {
    if (!feedbackModal) return;

    if (feedbackModalKeyHandler) {
        document.removeEventListener("keydown", feedbackModalKeyHandler);
        feedbackModalKeyHandler = null;
    }

    feedbackModal.hidden = true;
    feedbackModal.classList.remove("form-modal--success", "form-modal--error");
    document.body.classList.remove("form-modal-open");

    if (feedbackModalLastFocus && typeof feedbackModalLastFocus.focus === "function") {
        feedbackModalLastFocus.focus();
    }
    feedbackModalLastFocus = null;
}

function formatBrazilPhone(raw) {
    const digits = raw.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;

    const ddd = digits.slice(0, 2);
    const rest = digits.slice(2);
    let body = rest;

    if (rest.length > 8) {
        body = `${rest.slice(0, 5)}-${rest.slice(5)}`;
    } else if (rest.length > 4) {
        body = `${rest.slice(0, 4)}-${rest.slice(4)}`;
    }

    return `(${ddd}) ${body}`;
}

if (feedbackModal) {
    feedbackModal.addEventListener("click", (e) => {
        if (e.target.closest("[data-modal-dismiss]")) {
            hideFormFeedback();
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
        e.target.value = formatBrazilPhone(e.target.value);
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        const showError = (inputElement, message) => {
            const errorSpan = inputElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("error-message")) {
                errorSpan.textContent = message;
                errorSpan.style.color = "#ef4444";
                errorSpan.style.fontSize = "12px";

                inputElement.parentNode.classList.add("error");
            }
            isValid = false;
        };

        document.querySelectorAll(".error-message").forEach((span) => {
            span.textContent = "";
        });
        document.querySelectorAll(".form-group").forEach((group) => {
            group.classList.remove("error");
        });

        const nameInput = document.getElementById("name");
        if (nameInput.value.trim().length < 3) {
            showError(nameInput, "O nome deve ter pelo menos 3 caracteres.");
        }

        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, "Por favor, insira um e-mail válido.");
        }

        const phoneInput = document.getElementById("phone");
        const phoneDigits = phoneInput.value.replace(/\D/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            showError(phoneInput, "O telefone deve conter entre 10 e 11 dígitos com o DDD.");
        }

        const subjectInput = document.getElementById("subject");
        if (subjectInput.value === "") {
            showError(subjectInput, "Por favor, selecione um assunto da lista.");
        }

        const messageInput = document.getElementById("message");
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, "A mensagem é demasiado curta (mínimo de 10 caracteres).");
        }

        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "A enviar...";
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            fetch(formUrl, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        showFormFeedback({
                            title: "Mensagem enviada",
                            message: "Obrigado! Entrarei em contacto em breve.",
                            variant: "success",
                        });
                        contactForm.reset();
                    } else {
                        showFormFeedback({
                            title: "Não foi possível enviar",
                            message: "Ocorreu um erro ao enviar a mensagem. Tente novamente dentro de instantes.",
                            variant: "error",
                        });
                    }
                })
                .catch(error => {
                    showFormFeedback({
                        title: "Erro de ligação",
                        message: "Verifique a sua internet e tente novamente.",
                        variant: "error",
                    });
                    console.error(error);
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        }
    });
}