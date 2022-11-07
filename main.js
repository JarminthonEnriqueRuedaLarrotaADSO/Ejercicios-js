addEventListener("DOMContentLoaded", (e) => {

let formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
let datos = Object.fromEntries(new FormData(e.target))
let venta1 = datos.venta1
let venta2 = datos.venta2
let venta3 = datos.venta3
let sueldoBase = datos.sueldoBase
let oper = (venta1+venta2+venta3)
let operacion = oper*0.10
let operacion1 = operacion+sueldoBase
sueldo.innerHTML = `Su comision por las ventas es de ${operacion}`
sueldo1.innerHTML = `Su sueldo base mas sus comisiones es de ${operacion1}`
})
})