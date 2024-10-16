let div = document.getElementById('tagline')
let rnd = Math.random()

if (rnd < 0.25) {
    div.style.fontSize = '11.8px'
    div.innerHTML = 'We\'re still the & in copy & paste'
} else if (rnd < 0.5) {
    div.style.fontSize = '13px'
    div.style.letterSpacing = "0.5px"
    div.innerHTML = 'Welcome Back to Planet Earth!'
} else if (rnd < 0.75) {
    div.style.fontSize = '7.4px'
    div.innerHTML = 'Now how\'s that for "disruption," five-letter dotcoms?'
} else {
    div.style.fontSize = '10.9px'
    div.innerHTML = "Maybe I give it to you all on a dime"
}

// document.title = 'textz.com · ' + div.innerHTML