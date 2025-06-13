import chalk from "chalk";

function obtenerEnlaces(links) {
    if (Array.isArray(links)) {
        return links.map((objLink) => Object.values(objLink).join());
    } else {
        return [links];//con esto obtengo que si es un array
    }
}

async function verificarStatus(enlaces) {
    const listaStatus   = Promise.all(enlaces.map(async (enlace) => {
        try{
            const response = await fetch(enlace);
            return response.status;
        }catch (error){
            manejarError(error);
        } 
    }));
    return listaStatus;
};

function manejarError(error) {
    if (error.cause.code    === "ENOTFOUND") {
        return "No existe el enlace";
    } else {
        return "Ocurrio un error";
    }
}

export default async function validarEnlaces(listaEnlaces) {
    console.log("VALIDANDO....");
    const enlaces = obtenerEnlaces(listaEnlaces);
    const status    = await verificarStatus(enlaces);
    return listaEnlaces.map((objeto,indice) => {
        return {
            ...objeto, //copia de manera recursiva lo de objeto
            status: status[indice]
        }
    })
};