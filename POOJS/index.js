import Usuario from "./Usuario.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const usuario = new Usuario("Leo","L@L.com","29/08/2001");

console.log(usuario.mostrarDatos());

const admin = new Admin("Jon","J@J.com","28/08/1997");

admin.nombre = "Moche";

admin.mostrarNombre();