const listaLibros   = require('./arrays.js');

function busqueda(array,desde,hasta,valor) {
    const posicionMedio = Math.floor((desde + hasta) / 2);//sacamos la mitad del array
    const analizado = array[posicionMedio];

    //console.log(desde,hasta);esto es para verificar por donde esta pasando
    if (desde > hasta) {
        return -1;//Significa que no consiguio el elemento
    };

    if (valor === analizado.valor) {//Si acertamos con la posicion
        return posicionMedio;
    };

    if (valor < analizado.valor) {
        return busqueda(array,desde,(posicionMedio - 1),valor);//con esto quitamos todo del lado izquierdo hasta el atrazado
    };

    if (valor > analizado.valor) {
        return busqueda(array,(posicionMedio + 1),hasta,valor);
    };
};

console.log(busqueda(listaLibros,0,listaLibros.length -1,35));