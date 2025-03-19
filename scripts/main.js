import { frontCards } from "./pikomon.js"

const container = document.querySelector('#container')
const frontHTML = frontCards()

// const backHTML = backCards()

container.innerHTML = frontHTML