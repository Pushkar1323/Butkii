const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const sparklesContainer = document.querySelector('.sparkles');

// Move "No" button randomly on hover
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// "Yes" button -> go to cute page
yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
});

// Generate floating sparkle hearts
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
    sparkle.innerText = '💖';
    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000); // same as animation duration
}

// Continuously generate sparkles
setInterval(createSparkle, 300);
