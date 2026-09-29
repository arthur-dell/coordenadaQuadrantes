const button = document.querySelector("button")
const coordenadaX = document.getElementById("X")
const coordenadaY = document.getElementById("Y")
const resultado = document.getElementById("resultado")

button.addEventListener("click", quadrante)

function quadrante() {
    let X = Number(coordenadaX.value)
    let Y = Number(coordenadaY.value)
    
    if (X > 0 && Y > 0) {
        resultado.textContent = `Q1`
    } else if (X > 0 && Y < 0) {
        resultado.textContent = `Q4`
    } else if (X < 0 && Y < 0) {
        resultado.textContent = `Q3`
    } else if (X < 0 && Y > 0) {
        resultado.textContent = `Q2`
    } else if (X == 0 && Y == 0) {
        resultado.textContent = `Origem`
    } else if (X == 0) { 
        resultado.textContent = `Eixo Y` 
    } else if (Y == 0) { 
        resultado.textContent = `Eixo X` 
    }   
}