const nombre= 'Leonardo';
const paisNacimiento    = 'México';
const paisDomicilio = 'Avenida yano grande';
const deporteFavorito   = 'Boxeo';
const texto = 'Mi nombre es' + nombre + ', naci en: ' + paisNacimiento + ".\n"
            + 'actualmente vivo en:' + paisDomicilio + ".\n"
            + 'Mi deporte favorito es: ' + deporteFavorito;//Para hacer un salto de linea tenemos que usar doble comilla
const textoTemplate = `Mi nombre es: ${nombre}, donde naci es: ${paisNacimiento}. 
                       Mi domicilio es: ${paisDomicilio}. 
                       Y mi deporte favorito es: ${deporteFavorito}`;

console.log(texto);
console.log('***************************************************************************************');
console.log("Para usar esto tengo que colocar comilla invertida y para variables: ${}", textoTemplate);