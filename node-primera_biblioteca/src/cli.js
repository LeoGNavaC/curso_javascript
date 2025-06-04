import chalk from "chalk";
import cargarArchivo from "./index.js";

const camino   = process.argv;

async function procesarCamino(camino) {
    const enlaces = await cargarArchivo(camino[2]);

    console.log(chalk.yellow("Lista de enlaces: "), enlaces);
}

procesarCamino(camino);