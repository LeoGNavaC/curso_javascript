//Conversion implicita
const edad  = 39;
const edadUsuario   = "39";

console.log("Aqui nos junta los numero pensando que son cadenas", edad + edadUsuario);//Esto es implicito tomo los dos datos como cadenas de caracteres y me sale 3939

//Conversion explicita
//Siempre hay qye usar conversion explicita y no dejar a java que asuma la variable 
console.log("Aqui nos lo suma ya que convertimos a numero la cadena", edad + Number(edadUsuario));//Aqui si lo suma, debido a que lo comvierte 
console.log("Aqui si es explicito, le indicamos",String(edad) + edadUsuario);