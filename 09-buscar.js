const lstNotasYAlumnos  = [['Daniela','Lucas','Alvaro','Valeria'],[9,8.5,9.5,10]]

const nombreAlumno  = 'Lucas';

if(lstNotasYAlumnos[0].includes(nombreAlumno)) {//con el include puedo buscar un nombre en especifico
    console.log('Alumno encontrado');
    
    const posicionAlumno    = lstNotasYAlumnos[0].indexOf(nombreAlumno);//Con esto obtengo en donde se encuentra en a cadena
    const notaAlumno    = lstNotasYAlumnos[1][posicionAlumno];//Con esto obtengo su calificacion dependiendo de su posicion

    console.log(`La nota de su hijo: ${nombreAlumno} es: ${notaAlumno}`);
    console.log(`La posicion del alumno en el array de las calificaciones es ${posicionAlumno}`);
} else {
    console.log('Alumno NO encontrado');
}