/* Exercício nota de aluno */


const notas = [80, 80, 50];

 
function calculaNota (notas) {
  const medias = retornaMedia(notas);

  if(medias < 60) return 'F';
  if(medias < 70) return 'D';
  if(medias < 80) return 'C';
  if(medias  < 90) return 'B';
  return 'A';

 }

 
function retornaMedia(notas) {
  let media =0;
  for ( let i = 0; i < notas.length; i++) {
    (media += notas[i] ) 
  }
  return media /  notas.length;
}

 