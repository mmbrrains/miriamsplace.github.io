window.onload = function() {
    document.body.classList.add('ready');
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('feedback').style.display = 'block';

  document.getElementById('contactForm').reset();
});
