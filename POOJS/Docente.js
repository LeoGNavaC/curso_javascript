import Usuario from "./Usuario.js";

class Docente extends Usuario{
    constructor(nombre,email,rol = "docente",activo = true){
        super(nombre,email,rol,activo);
    };

    aprobarEstudiante(){
        console.log("¡¡¡¡¡¡Estudiante aprovador!!!!!, felicidades");
    };
};

const docenteUno    = new Docente("Diana","D@D.com");

console.log(docenteUno.mostrarDatos());
docenteUno.aprobarEstudiante();