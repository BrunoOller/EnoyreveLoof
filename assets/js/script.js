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
