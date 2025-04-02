const notas = [10,9,5,3,7,9];

const notasActualizadas = notas.map((nota) => (nota / 2) < 3 ? 3 : (nota/2));//con map puedo crear otro arreglo sin tener que colocarlo en otro arreglo

console.log(notasActualizadas);