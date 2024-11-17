//window.onload = function() {
//    document.body.classList.add('ready');
//};

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

document.addEventListener('DOMContentLoaded', (event) => {
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const href = this.href;
                    this.classList.add('clicked');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500); // Adjust this timeout to match the transition duration
                });
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

        let colorIndex = 0;  // Start at the first color

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            // Skip spaces
            if (char === " ") {
                textElement.innerHTML += char;  // Just append the character
                continue;
            }

            const span = document.createElement('span');
            span.textContent = char;
            span.className = rainbowColors[colorIndex % rainbowColors.length];
            textElement.appendChild(span);

            // Only increment colorIndex if the character is not a space
            colorIndex++;
        }
    });
});
