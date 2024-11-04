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

    const showOverlay = () => {
        overlay.style.display = 'flex';
        requestAnimationFrame(() => {
            overlay.classList.add('overlay-visible');
        });
        button.style.pointerEvents = 'auto';
    };

    const hideOverlay = () => {
        overlay.classList.remove('overlay-visible');
        overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none';
        }, { once: true });
        button.style.pointerEvents = 'none';
    };

    if (isMobile) {
        item.addEventListener('click', (event) => {
            // Hide any other visible overlays
            document.querySelectorAll('.overlay-visible').forEach(visibleOverlay => {
                if (visibleOverlay !== overlay) {
                    visibleOverlay.classList.remove('overlay-visible');
                    visibleOverlay.addEventListener('transitionend', () => {
                        visibleOverlay.style.display = 'none';
                    }, { once: true });
                }
            });

            showOverlay();
            event.stopPropagation(); // Stop propagation to prevent triggering document click
        });

        // Add event listener to hide overlay when clicking outside
        document.addEventListener('click', (event) => {
            if (!item.contains(event.target) && !overlay.contains(event.target)) {
                hideOverlay();
            }
        });

        // Prevent overlay from closing until clicked outside of it
        overlay.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        // Add event listener to hide overlay when clicking outside
        document.addEventListener('click', (event) => {
            if (!item.contains(event.target) && !overlay.contains(event.target)) {
                hideOverlay();
            }
        });
    } else {
        item.addEventListener('mouseenter', showOverlay);
        item.addEventListener('mouseleave', (event) => {
            if (!overlay.contains(event.relatedTarget)) {
                hideOverlay();
            }
        });

        overlay.addEventListener('mouseenter', showOverlay);
        overlay.addEventListener('mouseleave', (event) => {
            if (!item.contains(event.relatedTarget)) {
                hideOverlay();
            }
        });

        // Add event listener to hide overlay when clicking outside
        document.addEventListener('click', (event) => {
            if (!item.contains(event.target) && !overlay.contains(event.target)) {
                hideOverlay();
            }
        });
    }
});