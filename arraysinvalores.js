let arrayVacio    = [];

console.log("el contenido del array es: ",arrayVacio);
console.log("longitud del array es: ",arrayVacio.length);
console.log("Primera posicion del array: ",arrayVacio[0]);

console.log("*******************************************Array con 3 posiciones vacias*****************************************************************************************************");
//Otro ejemplo de array vacio
arrayVacio= [,,,];

console.log("longitud del array es: ",arrayVacio.length);
console.log("primera posicion del array: ",arrayVacio[0]);
console.log("segunda posicion del array: ",arrayVacio[1]);
console.log("tercera posicion del arrar: ",arrayVacio[2]);

console.log("*******************************************************Array con 3 posiciones vacias pero agregando un elemento al final del array********************************************");
//Caso que rellenamos un array
arrayVacio = [,,,];
console.log("longitud del array es: ",arrayVacio.length);
arrayVacio.push(50);//agregamos hasta el final del array un elemento
console.log("El contenido del array es: ",arrayVacio);
console.log("La longitud del array es: ",arrayVacio.length);