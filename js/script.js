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
        item.addEventListener('click', (event) => {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
                overlay.classList.add('overlay-visible');
            });
            button.style.pointerEvents = 'auto';
            event.stopPropagation(); // Stop propagation to prevent triggering document click
        });

        // Add event listener to hide overlay when clicking outside
        document.addEventListener('click', (event) => {
            if (!item.contains(event.target) && !overlay.contains(event.target)) {
                overlay.classList.remove('overlay-visible');
                overlay.addEventListener('transitionend', () => {
                    overlay.style.display = 'none';
                }, { once: true });
                button.style.pointerEvents = 'none';
            }
        });

        // Prevent overlay from closing when clicking inside it
        overlay.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    } else {
        item.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
            requestAnimationFrame(() => {
                overlay.classList.add('overlay-visible');
            });
            button.style.pointerEvents = 'auto';
        });

        item.addEventListener('mouseleave', (event) => {
            if (!overlay.contains(event.relatedTarget)) {
                overlay.classList.remove('overlay-visible');
                overlay.addEventListener('transitionend', () => {
                    overlay.style.display = 'none';
                }, { once: true });
                button.style.pointerEvents = 'none';
            }
        });

        overlay.addEventListener('mouseenter', () => {
            overlay.classList.add('overlay-visible');
            button.style.pointerEvents = 'auto';
        });

        overlay.addEventListener('mouseleave', (event) => {
            if (!item.contains(event.relatedTarget)) {
                overlay.classList.remove('overlay-visible');
                overlay.addEventListener('transitionend', () => {
                    overlay.style.display = 'none';
                }, { once: true });
                button.style.pointerEvents = 'none';
            }
        });
    }
});