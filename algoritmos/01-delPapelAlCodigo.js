//vamos a obtener el precio mas bajo de los que tenemos en el array
const listaPrecios  = [
    {
        nombre: "PHP",
        precio: 20,
    },
    {
        nombre: "Python",
        precio: 25,
    },
    {
        nombre: "Javascript",
        precio: 30,
    },
    {
        nombre: "Java",
        precio: 15,
    },
    {
        nombre: "Goland",
        precio: 35,
    }
];

// console.log(listaPrecios.length); //para verificar si funciona y si es un objeto, pero dentro de un array
let menor = 0;
for(let actual = 0;actual < listaPrecios.length;actual ++){
    //console.log(listaPrecios[actual]);//con esto traigo cada uno de los objetos en el campo
    if(listaPrecios[actual].precio < listaPrecios[menor].precio){
        menor = actual;//con esto le estoy dando la posicion donde encontre el valor mas bajo
        // console.log(listaPrecios[menor]);//Con esto puedo saber quien es el de menor precio
    }
}

console.log(`El programa que tiene menor precio es: ${listaPrecios[menor].nombre}`);
console.log(`El precio del programa es: ${listaPrecios[menor].precio}`);
console.log(`El programa que tiene menor precio se encuentra en la posicion: ${menor}`);

// const listaPrecios  = [20,25,30,15,35];


// let menor   = 0;//le doy el valor de cero ya que tome como referencia el valor de 20 para comprar toda la cadena

// for(let actual  = 0;actual < listaPrecios.length;actual ++){
//     if(listaPrecios[actual] < listaPrecios[menor]){/*listaprecios actual tiene el valor de la posicion que recorre el for, primero 20, luego 25 y asi 
//                                                     y listaprecios menor tiene el valor 20, debido a que le dimos la posicion 0*/
//         menor = actual;
//     }
// }

// console.log(`El precio menor de la lista es: ${listaPrecios[menor]}`);
// console.log(`La posicion del menor precio de la lista es: ${menor}`);