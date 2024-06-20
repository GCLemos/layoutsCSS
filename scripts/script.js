const navbar = document.getElementById("navbar");
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

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

// Defina suas traduções
const translations = {
    "en": {
        "footer": "Developed by",
        "properties": "Properties",
        "properties-flex": "Flexbox Properties",
        "properties-grid": "Grid Properties",
        "about-site": "This website is designed to help you learn and understand the various properties of Flexbox and Grid.",
        "site-guide": "Use the menu above to navigate through different sections and explore the real time examples."
    },
    "pt-br": {
        "footer": "Desenvolvido por ",
        "properties": "Propriedades",
        "properties-flex": "Propriedades do Flexbox",
        "properties-grid": "Propriedades do Grid",
        "about-site": "Este site foi projetado para ajudá-lo a aprender e compreender as diversas propriedades do Flexbox e do Grid.",
        "site-guide": "Use o menu acima para navegar pelas diferentes seções e explorar os exemplos em tempo real."
    }
};

function translatePage(newLanguage) {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    const textElements = document.querySelectorAll("[data-translate]"); // Elementos com atributo data-translate

    // Traduzir o texto
    textElements.forEach(el => {
        const key = el.getAttribute("data-translate"); // Obtenha a chave do atributo data-translate
        el.textContent = translations[newLanguage][key]; // Traduza o texto
    });

    // Alterne o atributo de idioma
    body.setAttribute("lang", newLanguage);
    html.setAttribute("lang", newLanguage);

    // Salve a nova linguagem no localStorage
    localStorage.setItem("preferredLanguage", newLanguage);

    // Atualize o ícone da linguagem
    const buttons = document.querySelector(".buttons");
    if (newLanguage === "en") {
        buttons.classList.add("us");
    } else {
        buttons.classList.remove("us");
    }
}

// Função para alternar entre idiomas
function toggleLanguage() {
    const body = document.querySelector("body");
    const currentLanguage = body.getAttribute("lang");
    const newLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";
    translatePage(newLanguage);
}

// Função para aplicar o idioma salvo ao carregar a página
function applySavedLanguage() {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt-br";
    translatePage(savedLanguage);
}

// Anexe a função ao seu botão
document.querySelector("#translate-button").addEventListener("click", toggleLanguage);

// Aplicar a linguagem salva ao carregar a página
document.addEventListener("DOMContentLoaded", applySavedLanguage);


function toggleLightDarkMode() {
    const body = document.body;
    const newMode = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";

    body.classList.toggle("light-mode");
    localStorage.setItem("preferredMode", newMode);
}

// Aplicar a preferência salva ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("preferredMode") || "dark-mode";
    if (savedMode === "light-mode") {
        document.body.classList.add("light-mode");
    }
});

// Anexe a função ao seu botão
document.querySelector("#mode-toggle-button").addEventListener("click", toggleLightDarkMode);




