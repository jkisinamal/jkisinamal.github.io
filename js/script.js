const blob = document.getElementById("blob");

const moveBlob = (x, y) => {
    blob.animate({
        top: `${y}px`,
        left: `${x}px`
    }, {duration: 3000, fill: "forwards"});
};

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    moveBlob(clientX, clientY);
};

// Overlay to paintings
const isMobile = window.matchMedia("(max-width: 768px)").matches;

document.querySelectorAll('.gallery-item').forEach(item => {
    const overlay = item.querySelector('.overlay');
    const button = overlay.querySelector('.button');

    if (isMobile) {
        item.addEventListener('click', () => {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
                overlay.classList.add('overlay-visible');
            });
            button.style.pointerEvents = 'auto';
        });
    } else {
        item.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
                overlay.classList.add('overlay-visible');
            });
            button.style.pointerEvents = 'auto';
        });
        item.addEventListener('mouseleave', () => {
            overlay.classList.remove('overlay-visible');
            overlay.addEventListener('transitionend', () => {
                overlay.style.display = 'none';
            }, { once: true });
            button.style.pointerEvents = 'none';
        });
    }

    document.addEventListener('click', (event) => {
        if (!item.contains(event.target) && !overlay.contains(event.target)) {
            overlay.classList.remove('overlay-visible');
            overlay.addEventListener('transitionend', () => {
                overlay.style.display = 'none';
            }, { once: true });
            button.style.pointerEvents = 'none';
        }
    });
});