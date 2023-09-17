let notificationsCounter = document.querySelector("#counter")
let markAll = document.querySelector("#mark-all")
let cards = document.querySelectorAll(".card")


let counter = 0
markAll.addEventListener('click', markedMessage)

function countingNotifications() {
    for(let i =0; i<cards.length; i++) {
        let card = cards[i]
        card.classList.contains("active") ? counter++ : counter
        notificationsCounter.innerHTML = counter
    }
}

countingNotifications()
function markedMessage() {
   Array.from(cards).map(card => {
    if(card.classList.contains("active")) {
        card.classList.remove("active")
    }
   })
   counter = 0
   notificationsCounter.innerHTML = counter
}
