window.onload = function() {
        document.body.classList.add('loaded');
};

window.addEventListener('load', () => {
        document.body.classList.add('loaded');
});

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.href;
        setTimeout(function() {
            window.location.href = href;
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rainbowColors = [
        'rainbow-color-1', 
        'rainbow-color-2', 
        'rainbow-color-3', 
        'rainbow-color-4', 
        'rainbow-color-5', 
        'rainbow-color-6', 
        'rainbow-color-7',
        'rainbow-color-8'
    ];

    const textElements = document.querySelectorAll('.rainbow-text');
    
    textElements.forEach(textElement => {
        const text = textElement.textContent;
        textElement.innerHTML = '';

        let colorIndex = 0;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (char === " ") {
                textElement.innerHTML += char;
                continue;
            }

            const span = document.createElement('span');
            span.textContent = char;
            span.className = rainbowColors[colorIndex % rainbowColors.length];
            textElement.appendChild(span);

            colorIndex++;
        }
    });
});
