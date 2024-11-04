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

// Add event listeners to toggle the overlay-visible class
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.overlay').classList.add('overlay-visible');
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.overlay').classList.remove('overlay-visible');
    });
});