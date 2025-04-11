const silla = {
    tipo: "gamer",
    color: "rojo",
    peso: 4
};

//objeto["color"]

console.log(`
    Tipo: ${silla.tipo.toUpperCase()}
    Color: ${silla["color"]}
    Peso: ${silla.peso} Kg
`);

//array ["Samsung", "Apple"] //abajo es un ejemplo de array

const llaves = ["marca", "color", "procesador"];

//nuevo objeto
const telefono= {
    marca: "Samsung",
    color: "rojo"
};

llaves.forEach((llave) => {
    console.log(`
        La llave: ${llave}
        tiene el valor ${telefono[llave]}
    `)
});