const notas = [9,8,6];
console.log("Array sin agregar numeros: ",notas);

let media   = (notas[0]+notas[1]+notas[2])/notas.length;
console.log("Media del array sin agregar numeros: ",media);

//Agregando elementos al array
notas.push(12);//con el metodo push agregamos 10 al final de la linea
notas.unshift(10);//con este agregamos al inicio del arreglo

media   = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log("Array agregando 12 al final y 10 al inicio: ",notas);
console.log("Media agregando 12 al final y 10 al inicio: ",media);