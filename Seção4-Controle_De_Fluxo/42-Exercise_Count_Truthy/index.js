 /* Falsy
    undefined
    null
    ''
    false
    0
    NaN */


const array = [0, null, undefined, '', 2, 3];

/* Função que recebe como parâmetro um vetor
define duas variáveis
itera pelo vetor com um for...of
se(valor === falso) falsey recebe +1
senão truthy recebe +1
*/
function contaTruthy (array) {
  let truthy = 0;
  let falsey = 0;
   for (const key of array) {
     if(!key) falsey++;
     else truthy ++;
  }
  console.log(`truthy = ${truthy} e falsey = ${falsey}`);
}