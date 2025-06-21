import Usuario from "./Usuario.js";

export default class Docente extends Usuario{
    constructor(nombre,email,rol = "docente",activo = true){
        super(nombre,email,rol,activo);
    };

    aprobarEstudiante(){
        console.log("¡¡¡¡¡¡Estudiante aprovador!!!!!, felicidades");
    };
};