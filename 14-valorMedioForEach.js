const lstNotas  = [7,5,9,8,7.5,4,10,9,8,9,10,9];

let sumaNotas   = 0;

lstNotas.forEach(function(nota,posicion) {//for each nos dice que recorre cada cadena, perodependiendo de la funcion
    sumaNotas += nota;
    console.log(`El numero: ${nota} tiene la posicion: ${posicion}`);
});

let media   = sumaNotas / lstNotas.length;

console.log(`La media de nuestro array es: ${media.toFixed(2)}`);