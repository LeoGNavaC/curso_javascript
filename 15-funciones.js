/*
let a   = 5;
let b   = 10;

let c   = a + b;
c   = c * 10 / 100;

a   = 8;
b   = 45;
c   = a + b;
c   = c * 10 / 100;
************************************************************************************** */
//Para ahorrarnos el estar modificando en cada momento a y b podemos hacer una funcion
//funcion nombre de la funcion (y parametros){}
function sumaYporcentaje(a, b){
    let c   = a + b;
    c   *= 10 / 100; //es para multiplicarlo 10 /100 por el valor de c
    
    function multiplicarNumeros(a,b){
        return a * b;
    }

    return c + multiplicarNumeros(a,b);//En este caso retornamos el valor que se calculo
}

//invocamos la funcion
console.log("Sacando el porcentaje de 5 y 10: ", sumaYporcentaje(5, 10));
console.log("Sacando el porcentaje de 5454 y 10: ", sumaYporcentaje(5454, 10));
