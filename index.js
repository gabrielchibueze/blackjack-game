



let isAlive = true
let hasBlackJack = false
let message = ""
let cards = []
let sum = 0
let cardSum = document.getElementById("card-sum")
let cardsAtHand = document.getElementById("cards-at-hand")
let gameOutcome = document.getElementById("game-outcome")

function playGame(){
    isAlive = true
    let firstCard = getRandomNumbers()
    let secondCard = getRandomNumbers()
    cards = [firstCard, secondCard]
                                                                                                                                   
    cardSum.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "You don't have BlackJack!! Do you want to draw a new card?"
        isAlive = true
    }
    else if (sum === 21){
        message = "wow!!! You have won black jack"
        hasBlackJack = true
    }
    else {
        message = "Ooops!!, You are out of the game"
        isAlive = false
    }
    gameOutcome.textContent = message

}

function getRandomNumbers() {
    let randomNumbers = Math.floor(Math.random()*13) + 1
    if (randomNumbers > 10){
        return 10
    }
    else if (randomNumbers === 1){
        return 11
    }
    else {
        return randomNumbers
    }
}
function addNewCard() {
    cardsAtHand.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
    cardsAtHand.textContent += cards[i] + "-"
    }
    return
}

let playerName = document.getElementById("name").value
let playerAge = document.getElementById("age").value
let playerChips = document.getElementById("chips").value
let nameP = document.getElementById("player-name")
let chipsP = document.getElementById("chips-P")

console.log(playerName)

function blurFunction() {
    nameP.innerText = playerName
    chipsP.textContent = playerChips
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumbers()
        cards.push(card)
        addNewCard()
        sum += card
    }
}
