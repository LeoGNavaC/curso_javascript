const clientes  = require('./clientes.json');

function filtrarPorPais(lista, pais){
    return lista.filter((cliente) => cliente.direccion.pais === pais);
}

const resultado = filtrarPorPais(clientes, "Mexico");

console.log(resultado);

// function filtrarPorApartemento(lista,apartamento){
//     return lista.filter((cliente) => cliente.direccion.apartamento === apartamento);
// }

// const resultado2    = filtrarPorApartemento(clientes, true);

// console.log(resultado2);