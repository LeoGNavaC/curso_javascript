const lstAlumnos    = ['Lucia','Martina','Hugo','Daniel','Matin','Maria',
                       'Sofia','Pablo','Alejandro','Paula',
                       'Daniela','Lucas','Alvaro','Valeria','Alba','Julia','Noa',
                       'Adrian','Mateo','David'];

//Con esto debidimos el array y contamos de cual hasta cual voy a tomar
const grupoA    = lstAlumnos.slice(0,10);
const grupoB    = lstAlumnos.slice(10,20);

console.log("**********************************Array completo***************************************************************************");
console.log(lstAlumnos);

console.log("**********************************Primera parte del arreglo****************************************************************");
console.log(grupoA);

console.log("**********************************Segunda parte del arreglo****************************************************************");
console.log(grupoB);