const categoria = document.getElementById(`categoria`);
const cantidad = document.getElementById(`cantidad`);
const btnResumen = document.getElementById(`resumen`);
const resultado = document.getElementById(`resultado`);
const borrar = document.getElementById(`borrar`);
const precio = 200;
let total = 0;
btnResumen.onclick = hacerResumen;
borrar.onclick = borrarTotal;

function descuento(cat, cant){
    switch(cat.value.toUpperCase()){
        case "ESTUDIANTE": total += (cant.value * precio) * 0.2;
        break;
        case "TRAINEE": total += (cant.value * precio) * 0.5;
        break;
        case "JUNIOR": total += (cant.value * precio) * 0.85;
        break;
    }
}

function borrarTotal(){
    total = 0;
    resultado.innerText = resultado.innerText = `Total a Pagar: $ `;
}

function hacerResumen(e){
    e.preventDefault();
    resultado.innerText = `Total a Pagar: $ `
    descuento(categoria, cantidad);
    resultado.innerText += total;
}