const usuarioConectado  = false;
const cuentaDisponible  = true;
const cadenaVacia   = "a";
let variableNoDefinida;
const variableNula  = null;

console.log(usuarioConectado == "0");//Aqui nos sale verdadero debido a que compara el valor y si sale igual
console.log(cuentaDisponible == "1");//Nos va a dar true ya que tienen el mismo valor
console.log(cadenaVacia == false);
console.log(variableNoDefinida == null);
console.log(typeof variableNula);//Con esto puedo averiguar que tipo de dato es la variables
console.log(typeof variableNoDefinida);