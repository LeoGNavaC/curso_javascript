export default class Usuario {//Con esto creamos una clase
    constructor(nombre, email, nacimiento, rol, activo = true){//con esto creamos un constructor que son los atributos
        this.nombre = nombre;
        this.email = email;
        this.nacimiento = nacimiento;
        this.rol    = rol || "estudiante";
        this.activo = activo;
    };

    mostrarDatos(){//es una funcion, en otras palabras es un metodo
        return `Su nombre es: ${this.nombre} y el email es: ${this.email}`;
    }
};

const usuarioUno    = new Usuario("Leo","L@L.com","29/08/2001","Estudiante",true);//creamos una nueva instancia de la clase y le pasamos los parametros
const usuarioDos    = new Usuario("Jon","J@J.com","27/07/1997");