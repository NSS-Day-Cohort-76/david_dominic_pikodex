import { database } from './database.js'

let selectedPikos = []


export const selectPikos = () => {document.querySelectorAll(".piko-flip-card").forEach(card => {
    card.addEventListener(
        "click",
        () => {
                    if(selectedPikos.length === 2){
                        document.querySelectorAll(".piko-flip-card.selected").forEach(el => { el.classList.remove('selected')})
                        selectedPikos = []
                        }
                    
                    const pikoData = {
                        name: card.querySelector('.piko-name').textContent,
                        strength: Number(card.querySelector('.piko-front').dataset.strength),
                    }

                    selectedPikos.push(pikoData)

                    if(selectedPikos.length === 2) {
                        comparePikos(selectedPikos[0], selectedPikos[1])
                    }
                 }
            )
        }
    )
}


export const comparePikos = (piko1, piko2) => {
    const fight1 = piko1.strength
    const fight2 = piko2.strength

    if(fight1 > fight2){
    window.alert(`${piko1.name}, is the Winner!`)    
}
    if(fight1 < fight2){
        window.alert(`${piko2.name} is the Winner!`)
    }
}

export const genPikoHTML = () => {
    let PikoHTML = ""
    for (const piko of database) { 
        PikoHTML += `
        
        <div class="piko-flip-card">
            <div class="piko-card-inner">
                <div class="piko-front" data-type="piko" data-strength="${piko.strength}">
                    <img src="${piko.imageUrl}" alt="${piko.name}" class="piko-img">
                    <h3 class="piko-name">${piko.name}</h3>
                </div>
                <div class="piko-back">
                    <p><strong>Category:</strong> ${piko.category}</p>
                    <p><strong>Abilities:</strong> ${piko.abilities}</p>
                    <p><strong>Weakness:</strong> ${piko.weakness}</p>
                </div>
            </div>
        </div>
        
        `;
    }
    return PikoHTML;
};

