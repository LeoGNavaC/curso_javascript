const listaPrecios  = require('./data');
const menorValor    = require('./menorPrecio');

for (let actual = 0; actual < listaPrecios.length;actual++) {
    console.log(`Posicion actual: ${actual}`)
    let posMenorValor   = menorValor(listaPrecios,actual);
    console.log(`Posicion menor: ${posMenorValor}`);
    //Aqui lo que realizamos es un lijero movimiento de 
    let elementoActual    = listaPrecios[actual];
    let elementoMenor   = listaPrecios[posMenorValor];

    listaPrecios[posMenorValor] = elementoActual;
    listaPrecios[actual]    = elementoMenor;

    console.log(listaPrecios);
};

console.log(listaPrecios);