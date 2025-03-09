//vamos a eliminar esto con un array y colocar un numero ideterminado de notas (variables)
// const nota1 = 9;
// const nota2 = 8.5;
// const nota3 = 6;
// const nota4 = 9.5;

const notas = [9,8.5,6,9.5];//con esto decimos que es un array, puedo ir vacio o lleno
            // 0,1  ,2,3    //posiciones del arreglo, siempre inicia en cero

//console.log(notas[0]);//Esto es un indice y vemos que valor tiene en esa posicion

const media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;//con length, puedo saber la longitud del array

console.log("La media de las notas es: ", media);