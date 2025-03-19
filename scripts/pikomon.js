import { database } from "./database.js"

export const frontCards = () => {
  let html = ''

  for (const list of database) {
    html += `
<div class="piko-card-flip">
  <div class="piko-card-inner">
      <div class="piko-front">
        <img class= "piko-img" src="${list.imageUrl}" alt='Piko Image'>
        <h2>${list.name}</h2>
      </div>
      <div class="piko-back-card">
        <p>The catagory for ${list.name} are ${list.category}</p>
        <p>The abilities for ${list.name} are ${list.abilities}</p>
        <p>The weakness for ${list.name} are ${list.weakness}</p>
      </div>
  </div>
</div> 
      `
  }
  return html
}

const renderCards = () => {
  const container = document.querySelectorAll('.container')
  container.innerHTML = frontCards()

  const flippedCard = document.querySelectorAll('.piko-card-flip')


  flippedCard.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle("flipped")
    })

  })
}

document.addEventListener('DOMContentLoaded', renderCards)

// export const backCards = () => {
//     let html = ''

//     for (const list of database) {
//       html += 

//     }
//     return html
// }

// Flip the Card


// const flippedCard = document.querySelectorAll('.piko-card-flip')


//   flippedCard.forEach(card => { 
//     card.addEventListener('click', frontCards => {
//     card.classList.toggle("flipped")
//   })
// })

