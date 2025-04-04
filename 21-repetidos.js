const lstAlumnos    = ['Jose','Maria','Jose','Luis','Jose','Maria'];

const lstAlumnosUnicos  = [...(new Set(lstAlumnos))];//set solo metrae uno de cada uno pero me lo trae en conjunto, por eso lo encierro en corchetes

console.log(lstAlumnosUnicos);