document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo
            navbar.style.top = '-100px'; // Move a navbar para fora da tela
        } else {
            // Rolando para cima
            navbar.style.top = '0'; // Move a navbar de volta ao topo
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para lidar com scroll negativo no iOS
    });
});
