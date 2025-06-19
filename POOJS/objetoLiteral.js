const usuario   = {
    nombre: "Mariana",
    email: "m@m.com",
    nacimiento: "11/10/1989",
    rol: "estudiante",
    activo: true,
    mostrarDatos: function(){
        console.log(this.nombre,this.email);
    }
};

const admin = {
    nombre: "Leonardo",
    email: "leonava988@gmail.com",
    nacimiento: "29/08/2001",
    rol: "admin",
    activo: true,
    crearCurso: function(){
        console.log("Curso Creado¡¡");
    }
}

Object.setPrototypeOf(admin,usuario);//con esto le indico que puedo traer un protpotipo de los metodos que tiene el otro objeto

//admin.__proto__;

admin.crearCurso();
admin.mostrarDatos();
//Herencia de prototipos