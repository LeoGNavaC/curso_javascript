//funcion normal
function multiplicaNumeros2(a,b,c){
    return a*b*c;
}

//exprecion de funcion 
const multiplicaNumeros = function(a, b, c) { //la funcion aqui no tiene un nombre
    return a*b*c;
}

//Arrow function (Es lo mismo que la funcion pero lo hacemos de manera mas simple con la flecha funcion)
const multiplicaNumeroFuncionFecla  = (a, b, c) => a*b*c;

const potencia = numero => numero*numero;

const funcion1 = () => {
    //this-1
    const funcion2 = () => {
        //this-2
    }
}
