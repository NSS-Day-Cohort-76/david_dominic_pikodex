import { genPikoHTML, selectPikos } from './pikomon.js'


const container = document.querySelector('#container')

const frontHTML = genPikoHTML()

container.innerHTML = frontHTML


const renderCards = () => {
    const container = document.querySelector('#container'); 
    container.innerHTML = genPikoHTML();
    const flippedCards = document.querySelectorAll('.piko-flip-card'); 
    flippedCards.forEach(card => {
        card.addEventListener('click', () => {
            const innerCard = card.querySelector('.piko-card-inner');
            innerCard.classList.toggle('flipped'); 
        })
    })
    selectPikos()
}

  document.addEventListener('DOMContentLoaded', () => {
    renderCards();
  }
)