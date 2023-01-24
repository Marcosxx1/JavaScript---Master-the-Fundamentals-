 /* Exercicio Array 1 */

const numeros = intervalo(-10, -4);

console.log(numeros);

/* minha lógica */
function intervalo(min, max) {
   const saida = [];
   for(let i = min; i <= max; i++) {
      saida[i] = i;
    }
    return saida;
  }

  //Lógica do vídeo
  function intervalo2(min, max) {
   const saida = [];
   for(let i = min; i <= max; i++)  
      saida.push(i); 
    return saida;
  }