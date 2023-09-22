window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
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