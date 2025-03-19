import { database } from './database.js'


export const genPikoHTML = () => {
    let PikoHTML = ""
    for (const piko of database) { 
        PikoHTML += `
        <div class="piko-flip-card">
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

// export const genBackPikoHTML = () => { 
//     let backPikoHTML = ""
//     for (const piko of database) {
//         backPikoHTML += `
      
//     }
//     return backPikoHTML
// }