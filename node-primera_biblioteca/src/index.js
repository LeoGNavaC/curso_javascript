import fs from "fs";//propiedad de js
import chalk from 'chalk';
import { error } from "console";

const textoPrueba   = `Son generalmente generados a partir de un objeto [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList), el cual es el resultado de la seleccion del archivo dado por el a traves el elemento input[<input>](https://developer.mozilla.org/en-US/docs/ Web/HTML/Element/Input), a partir del objeto [DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) utilizado en operaciones Drag and Drop o en español Arrastrar y Soltar o a partir de la API mozGetAsFile() en un [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).`;

function obtenerEnlaces(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm /*exprecion regular y el gm se usa para una busqueda global y multilinia*/
    const enlace    = [...texto.matchAll(regex)];
    const resultados    = enlace.map( enlace => ({[enlace[1]]: enlace[2]}));

    return resultados;
    //console.log(resultados);
}

//obtenerEnlaces(textoPrueba);

function manejarError (error) {
    console.log(error);//maneja el error como un objeto en este caso
    throw new Error(chalk.red(error));//con esto recibe el error y lo realizamos con una nueva instancia 
};

//con esta palabra reservada async se le indica que es asincrono 
async function cargarArchivo(rutaArchivo) {
    try {
        var comentario    = "hola mundo";
        const encoding  = "utf-8";
        const texto = await fs.promises.readFile(rutaArchivo,encoding);
        const resultados    = obtenerEnlaces(texto);
        
        return resultados.length !== 0 ? resultados : chalk.red("No se encontraron enlaces");
        //console.log(resultados);
    } catch(error) {
        manejarError(error);
    } finally {
        console.log(chalk.blue(`Operacion finalizada ${comentario}`));
    };
};

export default cargarArchivo;//estamos exportando toda la funcion

// //comunicacion sincrono
// function cargarArchivo(rutaArchivo) {
//     const encoding  = "utf-8";
//     fs.promises.readFile(rutaArchivo,encoding)
//     .then((texto) => console.log(chalk.green(texto)))/*Ayuda a mostrar el contenido */
//     .catch((error) => manejarError(error));
// };

//cargara el camino o el Path
// function cargarArchivo(rutaArchivo) {
//     const encoding  = "utf-8";
//     fs.readFile(rutaArchivo, encoding, (error, texto) => {
//         //stacktrace, donde se aparecio este error
//         if (error) {
//             manejarError(error);//si tiene un error lo va a mandar a llamar
//         }
//          console.log(chalk.green(texto));//esto imprime el contenido de texto.md
//     });
// };

// \[[^[\]]*?\] -- expresion regular para atrapar solo las etiquetas
// \(https?:\/\/[^\s?#.].[^\s]*\) -- expresion regular para atrapar los links 
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) -- con esta expresion solo tomamos los nombres de las etiquetas que estan dentro