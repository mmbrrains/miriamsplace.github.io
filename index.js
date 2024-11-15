window.onload = function() {
    document.body.classList.add('ready');
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('feedback').style.opacity = '1';

  document.getElementById('contactForm').reset();
});
