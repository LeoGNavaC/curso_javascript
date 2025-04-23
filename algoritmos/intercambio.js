function intercambio(lista, analizado) {
    let elementoAnalizado   = lista[analizado];
    let elementoAnterior  = lista[analizado-1];
            
    lista[analizado] = elementoAnterior;
    lista[analizado-1] = elementoAnalizado;
    
    analizado--;
}

module.exports  = intercambio;