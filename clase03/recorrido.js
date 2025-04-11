const cliente   = {
    nombre: "Sofia",
    edad: 31,
    email: "sofia@gmail.com",
    telefonos: ["55 1234 5678","55 4323 4353"],
    direccion: {
        calle: "Avenida Reforma",
        numero: 222,
        pais: "Mexico",
        apartamento: true
    }
};

for(let llave in cliente) {
    let tipo    = typeof cliente[llave];
    if(tipo !== "object" && tipo !=="function"){
        console.log(`La llave: ${llave} tiene el valor: ${cliente[llave]}`);    
    }
    
}