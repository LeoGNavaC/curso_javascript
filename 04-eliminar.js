const notas = [8,7,9,6,10];
let media = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4])/notas.length;//usamos let devido a que se quita un valor del array

console.log("Nostas antes de quitar el numero 8 y10: ", notas);
console.log("Sacando la media antes de quitarle el 8 y 10: ", media);

notas.pop();//con esto quito el elemento del final del array
notas.shift();//con esto quito el primero elemento del array    

media = (notas[0]+notas[1]+notas[2])/notas.length;

console.log("Eliminamos la nota 8 y 10: ", notas);
console.log("Media de cuando se quita el 8 y 10: ", media);