//en este juntamos dos listas en una
const listaPrecios = require('../algoritmos/data.js');
const {edtPlaneta, edtSuperTecno}   = require('./arrays.js');

function mezclarListas (lista1,lista2) {
    let posicionLista1  = 0;
    let posicionLista2  = 0;
    let posicionActual  = 0;
    const listaGeneral  = [];

    while (posicionLista1 < lista1.length && posicionLista2 < lista2.length) {
        if (lista1[posicionLista1].precio <= lista2[posicionLista2].precio ) {
            listaGeneral[posicionActual]    = lista1[posicionLista1];
            posicionLista1++;
        } else {
            listaGeneral[posicionActual]    = lista2[posicionLista2];
            posicionLista2++;
        }
        posicionActual++;
    }
//Con estos whiles comparamos si queda algo dentro de las listas lo agrega a la lista general
    while (posicionLista1 < lista1.length) {
        listaGeneral[posicionActual]    = lista1[posicionLista1];
        posicionLista1++;
        posicionActual++;
    }

    while (posicionLista2 < lista2.length) {
        listaGeneral[posicionActual]    = lista1[posicionLista2];
        posicionLista2++;
        posicionActual++;
    }
    console.log(listaGeneral);
}

mezclarListas(edtPlaneta,edtSuperTecno);