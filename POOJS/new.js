function Usuario(nombre,email) {
    this.nombre = nombre;
    this.email  = email;
    this.mostrarDatos = function() {
        return `Tu nombre es: ${this.nombre} y tu correo es: ${this.email}`;
    }
};

//new instancia
// const nuevoUsuario  = new Usuario("Leo","leonava988@gmaik.com");
// console.log(nuevoUsuario.mostrarDatos());

function Admin(nombre,email,rol){
    Usuario.call(this,nombre,email);//vincula las propiedades del objeto
    this.rol    = rol || "estudianre"; //en dado caso de que no tenga un rol se le asigna estudiante
}

Admin.prototype =   Object.create(Usuario.prototype);//creamos un objeto a traves de un prototipo y este es el Usuario.

// const nuevoUsuario  = new Admin("Leonardo Nava","leonava988@gmail.com","maestro");
// console.log(nuevoUsuario);

const user  = {
    inicializar: function(nombre,email){
        this.nombre =   nombre;
        this.email  =   email;
    },
    mostrarDatos: function(){
        return this.nombre;
    }
}

const nuevoUsuario  = Object.create(user);
nuevoUsuario.inicializar("Pedro2","leo@gamil.com")
console.log(nuevoUsuario.mostrarDatos());