const datos = require("./cliente.json");//con esto puedo traer los datos del formato json y lo guardamos datos

console.log(datos);
console.log(typeof datos);

//JSON.stringify() JSON.parse()

const datosString = JSON.stringify(datos);

console.log(datosString);
console.group(typeof datosString);

const datosObj  = JSON.parse(datosString);
//localStorage
console.log(datosObj);
console.group(typeof datosObj);