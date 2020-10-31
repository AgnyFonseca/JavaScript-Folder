function loadPage() {
    var message = window.document.getElementById('message')
    var pic = window.document.getElementById('picture')
    var date0 = new Date()
    var hour0 = date0.getHours()
    var second0 = date0.getMinutes()
    message.innerHTML = `Now it's ${hour0}:${second0}`
    
    if (hour0 >= 0 && hour0 < 12) {
        pic.src = 'morning.png'
        document.body.style.background = '#e3cd9f'
    } else if (hour0 >= 12 && hour0 <= 18) {
        pic.src = 'afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        pic.src = 'evening.png'
        document.body.style.background = '#515154'
    }
}