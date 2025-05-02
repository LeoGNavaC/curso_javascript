const { listaLibros } = require('./arrays.js');
const { cambiarLugar} = require('./utils.js');

function quickSort(array,izq,der) { //Necesitamos el array completo, y los dos lados, el izquierdo y el derecho dependiendo del pivote
    if (array.length > 1) { //verificamos si tiene algun contenido el array
        const posicionActual = ordena(array,izq,der);

        if (izq < posicionActual - 1) {
            quickSort(array,izq,posicionActual-1);
        }

        if (posicionActual < der) {
            quickSort(array,posicionActual,der);
        }
    }
    return array;
}

function ordena(array,izq,der) {
    console.log('array',array);
    console.log('izq, der', izq, der);

    const pivote    = array[Math.floor((izq + der)/2)];//suma la posicion de izquierda y derecha, y eso lo dividimos entre dos para tomar el pivote de en medio
    console.log('pivote',pivote);
    let actIzq  = izq;
    let actDer  = der;

    while (actIzq <= actDer) {
        while (array[actIzq].valor < pivote.valor) {
            actIzq++;
        }

        while (array[actDer].valor > pivote.valor) {
            actDer--;
        }

        if (actIzq <= actDer) {
            cambiarLugar(array,actIzq,actDer);
            actIzq++;
            actDer--;
        }
    }
    return actIzq;
}

console.log(quickSort(listaLibros,0,listaLibros.length-1));