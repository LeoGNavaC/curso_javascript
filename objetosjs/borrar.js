const objPersonaje  = {
    nombre: "Garfield",
    color: "naranja",
    raza: "gato",
    amigo: {
        nombre: "Odie",
        raza: "perro"
    },
};

console.log(`Objeto de personaje completo: ${objPersonaje}, y objeto de amigo completo: ${objPersonaje.amigo}`);

delete objPersonaje.amigo;

console.log(`Objeto de personaje completo: ${objPersonaje}, y objeto de amigo completo: ${objPersonaje.amigo}`);