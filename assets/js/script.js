
// ----------------------------------------------------------------------------------------------------- 01

// Função dos Botões de Música e Trailer
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music-button');
    const watchTrailerButton = document.getElementById('watch-trailer-button');

    toggleButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            toggleButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            toggleButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    watchTrailerButton.addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=NE5YJgpCeQw';
    });
});

// ----------------------------------------------------------------------------------------------------- 02

// Função para o botão de scrollar até o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Exibir ou ocultar o botão de "Voltar ao Topo" conforme a posição da página
window.addEventListener("scroll", function () {
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

// ----------------------------------------------------------------------------------------------------- 03

// Função para o header ocultar e aparecer
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("cabecalho").classList.add("hidden");
    } else {
        // Scroll up
        document.getElementById("cabecalho").classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// ----------------------------------------------------------------------------------------------------- 00
