const navbar = document.getElementById("navbar");
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

function toggleLightMode() {
    const body = document.body;
    body.classList.toggle("light-mode");

    // Salva o modo atual no armazenamento local
    const isLightMode = body.classList.contains("light-mode");
    localStorage.setItem("lightMode", isLightMode);
}

// Verifica se o modo claro está ativado no armazenamento local
document.addEventListener('DOMContentLoaded', () => {
    const isLightModeSaved = localStorage.getItem("lightMode");
    if (isLightModeSaved === "true") {
        document.body.classList.add("light-mode");
    }
});

function onScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition) {
        navbar.classList.add("hidden"); // Adiciona a classe "hidden" para esconder a navbar
    } else {
        navbar.classList.remove("hidden"); // Remove a classe "hidden" para mostrar a navbar
    }

    lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", onScroll);

function translatePage() {
    // Lógica para alternar entre traduzir a página para inglês/português
    // Implemente aqui a lógica desejada
    const body = document.querySelector("body");
    const currentLanguage = body.getAttribute("lang");
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    body.setAttribute("lang", newLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



