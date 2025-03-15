const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGenerales= [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGenerales.length; i++) {
  for (let j = 0; j < notasGenerales[i].length; j++) {
    media += notasGenerales[i][j]/notasGenerales[i].length;
  }
}

media = media/notasGenerales.length;

console.log(media);