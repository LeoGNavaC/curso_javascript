//Cabe resaltar que en java script da igual si le colocamos que tipo de dato numerico es javascript lo toma y supone que es
var primerNumero = 3.5;
var segundoNumero = 25.5;

//Operaciones aritmeticas con numeros
var sumaNumeros = primerNumero + segundoNumero;
var restaNumeros    = primerNumero - segundoNumero;
var multiplicacionNumeros   = primerNumero * segundoNumero;
var divisionNumeros = primerNumero / segundoNumero;

console.log('La suma fue: ', sumaNumeros);
console.log('La resta fue: ',restaNumeros);
console.log('La multiplicacion fue: ',parseInt(multiplicacionNumeros));//con parseInt le indico que me lo vuelva entero
console.log('La divicion fue: ',divisionNumeros.toFixed(2));//con el toFixed(2) con esto le indico que solo me muestre dos decimales el resultado

var numeroMasLetras = primerNumero - "AluraLatam";

console.log(numeroMasLetras); //en este resultado asume que primerNumero es una cadena de caracteres, en caso de que le coloquemos mas si le colocamos menos nos NaN, no es un numero