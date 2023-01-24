/* Adicionando novos elementos

   vetor.push = coloca os elementos no fim do vetor
   vetor.unshift = desloca os elementos atuais do vetor para a direita
                   e adiciona os novos elementos no começo
   vetor.splice = Podemos ir em dada posição e adicionar novos elementos
                  ou remover elementos existentes
   */

const numeros = [3, 4];

//começo
numeros.unshift(1, 2);
console.log(numeros);

/* meio 
Array.splice(start: number, deleteCount?: number | undefined): number[]  */
numeros.splice(2, 0, 'a', 'b')

//final
numeros.push(5, 6);
console.log(numeros);


