window.addEventListener('load', function() {
    // Oculta el loader
    document.getElementById('loader').style.display = 'none';
    // Muestra el contenido principal
    document.getElementById('contenido').style.display = 'block';
});

const showVideoButtons = document.querySelectorAll('.show-video-button');
showVideoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const videoContainer = card.querySelector('.video-container');
        videoContainer.style.display = 'block';
    });
});