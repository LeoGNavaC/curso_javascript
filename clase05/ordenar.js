const clientes = require("./clientes.json");

function ordenar(lista, propiedad) {
  const resultado = lista.sort((a, b) => {
    //recibe la primera letra y la compara con la segunda, si es mas alta o mas baja, colocalo abajo
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    //recibe la primera letra y la compara con la segunda, si es mas alta o mas baja, colocalo arriba
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    return 0;
  });
  //en dado caso que no se cumpla retorna y vuelve a hacer lo mismo
  return resultado;
}

const ordenadoNombre = ordenar(clientes, "nombre");

console.log(ordenadoNombre);