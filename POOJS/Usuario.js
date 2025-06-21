export default class Usuario {//Con esto creamos una clase
    #nombre;//Para que nosotros podamos usar la propiedad privada, necesitamos hacer esta declaracion de variable.
    #email;
    #nacimiento;
    #rol;
    #activo;

    constructor(nombre, email, nacimiento, rol, activo = true){//con esto creamos un constructor que son los atributos
        this.#nombre = nombre;
        this.#email = email;
        this.#nacimiento = nacimiento;
        this.#rol    = rol || "estudiante";
        this.#activo = activo;
    };

    //getter -- obtener un dato
    get nombre(){
        return this.#nombre;
    };

    get email(){
        return this.#email;
    };

    get nacimiento(){
        return this.#nacimiento;
    };

    get rol(){
        return this.#rol;
    };

    get activo(){
        return this.#activo;
    };

    //setters
    set nombre(nuevoNombre){
        if(nuevoNombre === ""){
            throw new Error("Nombre no valido, inserte un nombre valido");
        } else {
            this.#nombre    = nuevoNombre;
        }
    };

    // #crearObjUsuario(){//metodo privado
    //     return({
    //         nombre: this.#nombre,
    //         email: this.#email,
    //         nacimiento: this.#nacimiento,
    //         rol: this.#rol,
    //         activo: this.#activo
    //     });
    // };

    mostrarDatos(){//es una funcion, en otras palabras es un metodo
        //const objUsuario = this.#crearObjUsuario();//se elimino devido a que ya lo obtenemos con el getter
        return `Su nombre es: ${this.nombre} y el email es: ${this.email}`;
    }
};