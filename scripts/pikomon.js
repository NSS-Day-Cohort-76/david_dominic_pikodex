import { database } from './database.js'


export const genPikoHTML = () => {
    let PikoHTML = ""
    for (const piko of database) { 
        PikoHTML += `
        
        <div class="piko-flip-card" data-type="piko" data-strength="${piko.strength}">
        <div class="piko-card-inner">
        <div class="piko-front">
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

let selectedPikos = []

    document.querySelectorAll(".piko-flip-card").forEach(card => {
        card.addEventListener("click", function () {

        if(selectedPikos.length === 2){
            selectedPikos.forEach(el => el.classList.remove('selected'))
            selectedPikos = []
        }

            card.classList.add('selected')
            selectedPikos.push(card)

                    if(selectedPikos.length === 2){
                        comparePikos(selectedPikos[0], selectedPikos[1])
                    }
                }
            )
        }
    )


const comparePikos = (piko1, piko2) => {
    const fight1 = parseInt(piko1.dataset.strength)
    const fight2 = parseInt(piko2.dataset.strength)
    const name1 = piko1.querySelector(".piko-name").textContent
    const name2 = piko2.querySelector(".piko-name").textContent

    if(fight1 > fight2){
    window.alert(`${name1}, is the Winner!`)    
}
    if(fight1 < fight2){
        window.alert(`${name2} is the Winner!`)
    } else {
        window.alert("It's a tie!")
    }
}
