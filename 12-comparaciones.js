const edad = 39;
const edadMinima    = 18;
const numero    = "39";
const numeroComoCadena  = 39;

console.log(edad == edadMinima);//Aqui comparamos solamente el valor, no el tipo de dato, por eso nos va a dar false
console.log(edad != edadMinima);//Para diferenciar si es diferente, nos dara verdadero ya que si es diferente
console.log(edad <= edadMinima);//Nos dara si es verdadero o falso
//console.log(edad = edadMinima);//Al hacer esto le asignamos un valor a edadMinima"

console.log("falso porque no son el mismo tipo de dato: ", numero === numeroComoCadena);
console.log("su tipo de dato de numero es: ", typeof(numero));
console.log("Su tipo de dato de numeroComoCadena es: ", typeof(numeroComoCadena));
console.log("comparacion pero con typeof", typeof(numero) === typeof(numeroComoCadena));


