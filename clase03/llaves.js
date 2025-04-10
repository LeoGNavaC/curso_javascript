const cliente   = {
    nombre: "Sofia",
    edad: 31,
    email: "sofia@gmail.com",
    telefonos: ["55 1234 5678","55 4323 4353"],
    // direccion: {
    //     calle: "Avenida Reforma",
    //     numero: 222,
    //     pais: "Mexico",
    //     apartamento: true
    // }
};

const llavesDelObj  = Object.keys(cliente);//le decimos que obtenga las llaves de cliente

console.log(llavesDelObj);

if (!llavesDelObj.includes("direccion")){//preguntamos si existe la llave direccion
    console.log("Error. es necesario tener una direccion");
}