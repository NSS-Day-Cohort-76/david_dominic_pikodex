import { frontCards } from "./pikomon.js"


// const container = document.querySelector('#container')
// const frontHTML = frontCards()

// const backHTML = backCards()

// container.innerHTML = frontHTML



const container = document.querySelector('#container')
const frontHTML = frontCards()

container.innerHTML = frontHTML

const renderCards = () => {
    const container = document.querySelector('#container');
    container.innerHTML = frontCards();
    const flippedCards = document.querySelectorAll('.piko-flip-card');
    flippedCards.forEach(card => {
        card.addEventListener('click', () => {
            const innerCard = card.querySelector('.piko-card-inner');
            innerCard.classList.toggle('flipped');
        })
    })
}
  document.addEventListener('DOMContentLoaded', renderCards)