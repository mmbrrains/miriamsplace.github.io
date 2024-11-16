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

    let colorIndex = 0;  // Start at the first color

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Skip apostrophes and spaces
        if (char === "'" || char === " ") {
            textElement.innerHTML += char;  // Just append the character
            continue;
        }

        const span = document.createElement('span');
        span.textContent = char;
        span.className = rainbowColors[colorIndex % rainbowColors.length];
        textElement.appendChild(span);

        // Only increment colorIndex if the character is not an apostrophe or space
        colorIndex++;
    }
});
