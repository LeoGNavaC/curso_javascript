const lstAlumnos    = ['Jose','Maria','Diego','Juliana','Leonardo'];
const lstNotas  = [8,5,6,5,8];
                                    //e = elemento , i = indice
const lstAlumnosReprobados = lstAlumnos.filter((e,i)=> lstNotas[i] < 6);

console.log(`Los alumnos aprobados fueron: ${lstAlumnos}`);
console.log(`Los alumnos reprobados fueron: ${lstAlumnosReprobados}`);