import chalk from "chalk";
import cargarArchivo from "./index.js";
import fs from "fs";

const camino   = process.argv;

function mostrarDatos(datos, archivo) {
    console.log(
        chalk.yellow("Lista de enlaces: "), 
        chalk.black.bgGreenBright(archivo),
        datos
    );
}

async function procesarTexto(argumentos) {
    const camino    = argumentos[2];

    try {
        fs.lstatSync(camino)//leemos el contenido de los argumentos
    } catch (error) {
        if (error.code === "ENOENT")
        console.log(chalk.red(`El archivo o directorio no existen: ${camino}`));
        return;
    }

    if (fs.lstatSync(camino).isFile()) {
        //console.log(chalk.yellowBright(`Lo que estas abriendo es el archivo: ${camino}`));
        const enlaces = await cargarArchivo(camino);
        mostrarDatos(enlaces, camino);        
    } else if (fs.lstatSync(camino).isDirectory()) {
        console.log(chalk.redBright(`Lo que estas abriendo es el directorio: ${camino}`));
        
        const archivos  = await fs.promises.readdir(camino);
        
        //console.log(archivos);
        archivos.forEach(async (nombreArchivo) => {
            //console.log(`${camino}${nombreArchivo}`); //obtenemos el camino que recorre, la ruta como si no movieramos en el CMD
            const enlaces   = await cargarArchivo(`${camino}${nombreArchivo}`);
            //console.log(`La ruta del archivo es: ${camino}${nombreArchivo}`);
            mostrarDatos(enlaces, nombreArchivo);
        })
    }
}

procesarTexto(camino);