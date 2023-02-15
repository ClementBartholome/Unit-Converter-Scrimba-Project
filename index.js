let convertBtn = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.280839895
const literToGallon = 0.2641720524
const kilogramToPound = 2.20462262185

convertBtn.addEventListener("click", function() {
  let baseValue = inputEl.value

  lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet 
        | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters` 
  volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons     | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
  massEl.textContent = `${baseValue} kilograms = ${(baseValue * kilogramToPound).toFixed(3)} pounds 
        | ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(3)} kilograms`
}) 