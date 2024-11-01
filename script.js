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

document.body.ontouchmove = event => {
    const touch = event.touches[0];
    moveBlob(touch.clientX, touch.clientY);
};

document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const title = document.createElement('h3');
    title.textContent = img.getAttribute('data-title');
    overlay.appendChild(title);

    const description = document.createElement('p');
    description.textContent = img.getAttribute('data-description');
    overlay.appendChild(description);

    const link = document.createElement('a');
    link.href = img.getAttribute('data-link');
    link.textContent = 'View More';
    overlay.appendChild(link);

    item.appendChild(overlay);
});
