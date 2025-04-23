const lstbiblioteca = [
    {
        nombre: "Libro de bill",
        precio: 534,
        genero: "terror"
    },
    {
        nombre: "Metro 2033",
        precio: 345,
        genero: "apocalipcis"
    },
    {
        nombre: "La gran historia de los videojuegos",
        precio: 409,
        genero: "videojuegos"
    },
    {
        nombre: "Berserk",
        precio: 600,
        genero: "literatura fantastica"
    }
];

let posicioMenorPrecio = 0;
let posicioMayorPrecio = 0;

console.log(`\nEstos es lo que contiene el objeto biblioteca \n`);

for (let posicionActual = 0; posicionActual < lstbiblioteca.length;posicionActual++) {
    let posicionParaElWhile = posicionActual;//le estoy guardando la posicion, para que no altere el for
    console.log(lstbiblioteca[posicionActual]);
    if (lstbiblioteca[posicionActual].precio < lstbiblioteca[posicioMenorPrecio].precio) {
        posicioMenorPrecio  = posicionActual;//Busco el objeto que tenga menor precio y lo guardo en la variable
    }
    
    if (lstbiblioteca[posicionActual].precio > lstbiblioteca[posicioMayorPrecio].precio) {
        posicioMayorPrecio  = posicionActual;//busco el objeto con mayor precio y lo guardo en la variable
    }
    //--como estan-- i a o u e  || 1° ordenador ----> a i o u e ---- 2° ordenador ----> a i o u e ---- 3° ordenador ----> a i o u e ---- 4° ordenador ----> a i o e u ---- 5° ordenador ----> a i e o u ---- 6° ordenador ----> a e i o u //este es un ejemplo de como es que acomodaria si lleva los nombre por las bocales
    while (posicionParaElWhile > 0 && lstbiblioteca[posicionActual].nombre < lstbiblioteca[posicionActual-1].nombre) {
        let elementoAnalizado   = lstbiblioteca[posicionActual];
        let elementoAnterior    = lstbiblioteca[posicionActual-1];

        lstbiblioteca[posicionActual]   = elementoAnterior;
        lstbiblioteca[posicionActual-1] =   elementoAnalizado;
        posicionParaElWhile--;
    }
}

console.log(`\n`);
console.log(`El libro con menor precio es: ${lstbiblioteca[posicioMenorPrecio].nombre}, su precio es de: ${lstbiblioteca[posicioMenorPrecio].precio}  y el genero es: ${lstbiblioteca[posicioMenorPrecio].genero}\n`);
console.log(`El libro con mayor precios es: ${lstbiblioteca[posicioMayorPrecio].nombre}, su precio es de: ${lstbiblioteca[posicioMayorPrecio].precio} y el genero es: ${lstbiblioteca[posicioMayorPrecio].genero}\n`);