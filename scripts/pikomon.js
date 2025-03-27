import { database } from './database.js'

const selectedPikos = []


document.querySelectorAll(".piko-flip-card").forEach(obj => {addEventListener(
        "click",
        function(theClick){
        const theTarget = theClick.target
            debugger
        if(selectedPikos.length === 2){
            selectedPikos.forEach(el => el.classList.remove('selected'))
            selectedPikos = []
        }

        obj.classList.add('selected')
        selectedPikos.push(obj)

        if(selectedPikos.length === 2){
            comparePikos(selectedPikos[0], selectedPikos[1])
    }}
)

    }
    )

const comparePikos = (piko1, piko2) => {
    const fight1 = piko1.dataset.strength
    const fight2 = piko2.dataset.strength
    
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

