const lstNotas  = [7,5,9,8,7.5,4,10,9,8,9,10,9];

let sumaNotas   = 0;

for (let nota of lstNotas) { // con esto me ahorro todo el conteo y colocar hasta cuando va a parar, pero solo para ir a adelante, no llendo en numeros negativos
    sumaNotas += nota;
}

const valorMedio    = sumaNotas / lstNotas.length;

console.log(`Sacanado la media de los datos con for of: `, valorMedio.toFixed(2));