const listaPrecios = require('./data');
const intercambio   = require('./intercambio');

function insertionSort(lista){
    for (let actual = 0;actual < lista.length;actual++) {
        let analizado   = actual;//De la posicion donde estemos
        while (analizado > 0 && lista[analizado].nombre < lista[analizado-1].nombre ) {
            /*//esto le metiomos en un algoritmo sort
            let elementoAnalizado   = lista[analizado];
            let elementoAnterior  = lista[analizado-1];
            
            lista[analizado] = elementoAnterior;
            lista[analizado-1] = elementoAnalizado;
            */
            intercambio(lista,analizado);

            analizado--;
        }
    }
    return lista;
}

console.log(insertionSort(listaPrecios));