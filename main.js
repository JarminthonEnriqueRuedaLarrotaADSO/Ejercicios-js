addEventListener("DOMContentLoaded", (e) => {
let pagar = document.querySelector('#pagar')
let formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
let datos = Object.fromEntries(new FormData(e.target))
let pago = 5208.33
let horas = datos.hora
horas *= pago
pagar.innerHTML = horas
})

})