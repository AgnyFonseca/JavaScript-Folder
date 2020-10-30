let counter = 0 
let res = document.querySelector('section#result')

function count() {
    counter ++
    res.innerHTML = `<p>The counter is with <mark>${counter}</mark> clicks.</p>`
}

function clean() {
    counter = 0
    res.innerHTML = null
}