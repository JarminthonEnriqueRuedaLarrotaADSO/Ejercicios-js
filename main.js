addEventListener("DOMContentLoaded", (e) => {

let formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
let datos = Object.fromEntries(new FormData(e.target))
let acumulador = 0
let numero = datos.numero
for (let i = 1; i <= numero/2; i++) {
    if (numero % i == 0) {
        acumulador += i
    }
    if (acumulador == numero) {
        perfecto.innerHTML = `El numero "${numero}" es un numero perfecto`
    }
    else{
        perfecto.innerHTML = `El numero "${numero}" no es un numero perfecto`
    }

}



})

})