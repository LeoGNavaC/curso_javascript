const lstAlumnos    = ['Daniela','Lucas','Alvaro','Valeria'];
const lstNotas  = [9,8.5,9.5,10];
const lstUnificada  = [lstAlumnos,lstNotas];

console.log('Esta es la lista de los alumnos: ',lstAlumnos);
console.log('Esta es la lista de sus notas: ', lstNotas);
console.log('Uniendo las dos listas: ',lstUnificada);
console.log('Mostrando el nombre de lucas de la lista unificada: ',lstUnificada[0][1]);//Con esto le indico del indice general y dentro de ese indice 0 traeme el elemento de la posicion 1
console.log('La nota de Lucas: ',lstUnificada[1][1]);