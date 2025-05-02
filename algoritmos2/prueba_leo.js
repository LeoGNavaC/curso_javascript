const {edtPlaneta,edtSuperTecno}    = require('./arrays.js');

function recorrerArray(lista) {
    for (let actual= 0;actual < lista.length;actual++) {
        return lista[actual];
    }
}

console.log(recorrerArray(edtPlaneta));
console.log(recorrerArray(edtSuperTecno));