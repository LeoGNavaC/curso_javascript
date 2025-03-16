const lstNombres    = ['Diego','Maria','Leonardo'];

//Funcion anonima como argumento
lstNombres.forEach(function(elemento,posicion){
    console.log(elemento);
});

console.log('**********************************Funcion flecha***************************************');

//Funcion arrow o funcion de flecha
lstNombres.forEach((elemento, posicion) => console.log(elemento));

console.log('**********************************Declaracion de funcion***************************************');

//Declaracion de funcion
function imprimeNombres(elemento){
    console.log(elemento);
}

lstNombres.forEach(imprimeNombres);