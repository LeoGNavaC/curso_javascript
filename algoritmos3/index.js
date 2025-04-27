const listaLibros   = require('./arrays.js');

function mergetSort(array, nivelProfundidad = 0) {
    console.log(`Nivel de profundida: ${nivelProfundidad}`);
    console.log(array);
    if (array.length > 1) {
        const mitad    = Math.floor(array.length / 2);//Con esto dividimos el array y si es en decimal lo redonde hacia arriba
        const lista1    = mergetSort(array.slice(0,mitad), nivelProfundidad + 1);//obtenemos la primera mitad
        const lista2    = mergetSort(array.slice(mitad), nivelProfundidad + 1);//obtenemos la segunda mitad

        array   = ordenarListas(lista1,lista2);
    }
    return array;
}

function ordenarListas(lista1,lista2) {
    let posicionLista1  = 0;
    let posicionLista2  = 0;
    const listaGeneral  = [];

    while (posicionLista1 < lista1.length && posicionLista2 < lista2.length) {
        if (lista1[posicionLista1].precio <= lista2[posicionLista2].precio ) {
            listaGeneral.push(lista1[posicionLista1]);//agregamos lo que tenemos con el metodo push
            posicionLista1++;
        } else {
            listaGeneral.push(lista2[posicionLista2]);
            posicionLista2++;
        }
    }
//Con esto puedo agregar le indico que lo que sobre lo coloque en la lista, que se traiga todo
    return listaGeneral.concat(posicionLista1 < lista1.length ? lista1.slice(posicionLista1) : lista2.slice(posicionLista2));
}

console.log(mergetSort(listaLibros));