function menorPrecio(arreglo,posInicial){
    let menor = posInicial;
    for(let actual = posInicial;actual < arreglo.length;actual ++){
        if(arreglo[actual].precio < arreglo[menor].precio){
            menor = actual;
        }
    }
    return menor; //regresamos la posicion menor
}

module.exports  = menorPrecio;  