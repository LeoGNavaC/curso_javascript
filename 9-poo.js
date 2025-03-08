class Numeros {//creamos una clase
    suma(a,b){//realizamos el calculo
        return a+b;
    }
}

const obj   = new Numeros();//agregamosa la clase como un objeto
console.log(obj.suma(10,3)); //Le pasamos la el objeto suma