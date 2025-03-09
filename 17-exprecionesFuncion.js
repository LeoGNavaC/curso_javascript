/*
function multiplicaNumeros(a, b, c) {
    const resultado = a*b*c;
    return resultado;
}
*/
//Para meter toda la funcion en una variable es:
const multiplicaNumeros = function(a, b, c) { //la funcion aqui no tiene un nombre
    const resultado = a*b*c;
    return resultado;
}

console.log(multiplicaNumeros(1,2,3)); //no se puede reasignar ningun valor de nuevo