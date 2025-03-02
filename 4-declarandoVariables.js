/* programa para calcular el area de un rectangulo usando la palabra reservada var */
// La palabra recerbada var se puede usar en todos lados, es de manera global
var baseV    = 10;
var alturaV  = 20;
var areaV    = baseV * alturaV;/* Esto no es lo recomentable perose puede hacer y javascript lo coloca solo */
console.log("Usando var para las variables", areaV);
{
    {
        console.log("Se ve otro docientos porque esta en el hambito global", areaV);
    }
}

/* Programa para calcularel area de un rectangulo usando la palabra recervada let */
// let se usa para un hambito mas controlado, no sea global las variables
{
    let baseL    = 10;
    let alturaL  = 20;
    let areaL    = baseL * alturaL;/* Esto no es lo recomentable perose puede hacer y javascript lo coloca solo */
    {
        console.log("Esta si se vera ya que esta dentro del bloque, los corchetes", areaL);
    }
}
console.log("No se vera debido a que area esta definida dentro del bloque, no es global", areaL);