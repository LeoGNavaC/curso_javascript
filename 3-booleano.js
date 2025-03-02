//var menorDeEdad = false;
var edadMinima  = 18;
var curso   = "Javascript"
var edadActual  = "39";
var edadActual1 = "39";

console.log(edadMinima >= 18); //Aqui en este ejemplo estoy consiguiendo un valor booleano 
console.log(curso >= 18);//En este caso no hay forma de comparar
//En este caso con los dos iguales comparamos el valor sin importar el tipo de dato
console.log("Igual doble", curso == "Javascript"); //En este caso comparan cadenas y nos da un valor true
console.log("Igual doble: ", edadActual == 39); //Nos sale un valor true devido a que tienen el mismo valor
//Con el triple igual comparamos el valor y el tipo de dato de la variable
console.log("Triple igual: ", edadActual1 === 39); //En esta opcion nos da falso debido a que no son el mismo valor
