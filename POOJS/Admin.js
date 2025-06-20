import Usuario from "./Usuario.js";

class Admin extends Usuario {
    constructor(nombre,email,nacimiento,rol = "admin", activo = true){
        super(nombre,email,nacimiento,rol);//le mandamos los datos a la clase principal
    };

    crearCurso (curso,vacantes) {
        return `Cursos: ${curso}, Vacantes: ${vacantes}`;
    }
};

const adminUno  = new Admin("Moy","M@M.com","03/11/2004");

console.log(adminUno);
console.log(adminUno.mostrarDatos());
console.log(adminUno.crearCurso("POO",2))