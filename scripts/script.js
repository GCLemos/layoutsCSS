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
        "properties-flex": "Flexbox Properties",
        "properties-grid": "Grid Properties",
        "about-site": "This website is designed to help you learn and understand the various properties of Flexbox and Grid.",
        "site-guide": "Use the menu above to navigate through different sections and explore the real time examples."
    },
    "pt-br": {
        "footer": "Desenvolvido por ",
        "properties-flex": "Propriedades do Flexbox",
        "properties-grid": "Propriedades do Grid",
        "about-site": "Este site foi projetado para ajudá-lo a aprender e compreender as diversas propriedades do Flexbox e do Grid.",
        "site-guide": "Use o menu acima para navegar pelas diferentes seções e explorar os exemplos em tempo real."
    }
};

function translatePage() {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    const currentLanguage = body.getAttribute("lang");
    const newLanguage = currentLanguage === "pt-br" ? "en" : "pt-br";
    const textElements = document.querySelectorAll("[data-translate]"); // Elementos com atributo data-translate

    // Traduzir o texto
    textElements.forEach(el => {
        const key = el.getAttribute("data-translate"); // Obtenha a chave do atributo data-translate
        el.textContent = translations[newLanguage][key]; // Traduza o texto
    });

    // Alterne o atributo de idioma
    body.setAttribute("lang", newLanguage);
    html.setAttribute("lang", newLanguage);
}

// Anexe a função ao seu botão
document.querySelector("#translateButton").addEventListener("click", translatePage);

function translateTexts() {
    const body = document.querySelector("body");
    const currentLanguage = body.getAttribute("lang");
    const textElements = document.querySelectorAll("[data-translate]"); // Elementos com atributo data-translate

    if (currentLanguage === "pt-br") {
        // Traduzir para Inglês
        textElements.forEach(el => {
            const key = el.getAttribute("data-translate"); // Obtenha a chave do atributo data-translate
            el.textContent = translations["en"][key]; // Traduza o texto
        });
        body.setAttribute("lang", "en"); // Alterne o atributo de idioma para Inglês
    } else {
        // Traduzir para Português
        textElements.forEach(el => {
            const key = el.getAttribute("data-translate");
            el.textContent = translations["pt-br"][key];
        });
        body.setAttribute("lang", "pt-br"); // Alterne o atributo de idioma para Português
    }
}

// Anexe a função ao seu botão
document.querySelector("#translate-button").addEventListener("click", translateTexts);

