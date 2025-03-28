import { genPikoHTML, selectPikos } from './pikomon.js'
// import { genBackPikoHTML } from './pikomon.js'

const container = document.querySelector('#container')

const frontHTML = genPikoHTML()

container.innerHTML = frontHTML
// container.innerHTML = backHTML

selectPikos()

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
}
  document.addEventListener('DOMContentLoaded', renderCards, selectPikos)