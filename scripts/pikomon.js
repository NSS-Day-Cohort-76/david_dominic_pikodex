import { database } from "./database.js"

export const frontCards = () => {
  let html = ''

  for (const list of database) {
    html += `
<div class="piko-flip-card">
  <div class="piko-card-inner">
      <div class="piko-front">
        <img class= "piko-img" src="${list.imageUrl}" alt='Piko Image'>
        <h2>${list.name}</h2>
      </div>
      <div class="piko-back">
        <p>Catagory: ${list.category}</p>
        <p>Abilities: ${list.abilities}</p>
        <p>Weakness: ${list.weakness}</p>
      </div>
  </div>
</div> 
      `
  }
  return html
}

export const battle = () => {
  
}
