const lstAlumnos= ['Lucia','Martina','Hugo','Daniel','Martin','Maria',];

console.log("El array original",lstAlumnos);

lstAlumnos.splice(2,2, 'Diego','Jose','Leonardo');//El primer dos voy a la posiciony el segundo es cuantos va a cortar a partir de la posicion

console.log("Borrando Hugo y Daniel y agregando Diego, Jose y Leonardo: ",lstAlumnos);