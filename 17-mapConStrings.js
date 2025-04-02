const alumnos   = ['Leonardo JOSE','diego Alejandro','Maria JUlia'];

const alumnosCorregidos = alumnos.map((alumno, i)=> {
    console.log(i);
    return alumno.toUpperCase();
});

console.log(alumnosCorregidos);