const cliente   = {
    nombre: "Sofia",
    edad: 31,
    email: "sofia@gmail.com",
    telefonos: ["55 1234 5678","55 4323 4353"],
    direccion: [
        {
        calle: "Avenida Reforma",
        numero: 222,
        pais: "Mexico",
        apartamento: true
        }
    ],
    saldo: 200,
    efectuarPago: function(valor){//funcion dentro de un objeto
        if(valor < this.saldo){
            console.log("Realizar pago");
            this.saldo -= valor;
            console.log(`Valor actual: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
};

cliente.efectuarPago(50);