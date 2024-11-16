window.onload = function() {
    document.body.classList.add('ready');
};

document.getElementById('button').addEventListener('click', function(event) {

  document.getElementById('email').style.opacity = '1';

});

document.addEventListener('DOMContentLoaded', () => {
    const rainbowColors = [
        'rainbow-color-1', 
        'rainbow-color-2', 
        'rainbow-color-3', 
        'rainbow-color-4', 
        'rainbow-color-5', 
        'rainbow-color-6', 
        'rainbow-color-7'
    ];

    const textElement = document.getElementById('rainbow-text');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.className = rainbowColors[i % rainbowColors.length];
        textElement.appendChild(span);
    }
});
