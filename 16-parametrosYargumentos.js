function sumaYporcentaje(a, b){
    let c   = a + b;
    c   *= 10 / 100; //es para multiplicarlo 10 /100 por el valor de c
    
    function multiplicarNumeros(a,b){
        return a * b;
    }

    return c + multiplicarNumeros(a,b);//En este caso retornamos el valor que se calculo
}

function saludar(texto = 'hola mundo'){
    console.log(texto);
}

function mostrarTexto(texto, texto2 = 'Texto por defecto en texto 2', texto3){
    console.log(texto);
    console.log(texto2);
    console.log(texto3);
}

//invocamos la funcion
saludar();
saludar('hola');
mostrarTexto('parametro texto', 'parametro texto 2', 'parametro texto 3');
mostrarTexto('hola mundoooo este es otro mensaje');//Me mandara indefinido ya que no le dimos los demas parametros  que faltan