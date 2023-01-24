 /* Esvaziando um vetor(Array) */

 let numeros = [1, 2, 3, 4];
 let outro = numeros;

 /* Solução 1, apenas funciona caso não existam outras
 referencia para o vetor */
 numeros = []; 
 console.log(numeros);

 /* Solução 2, trunca o vetor definindo seu comprimento como 0*/
 numeros.length = 0; //**MELHOR OPÇÃO**/


 /* Solução 3 utilizando o método splice
 vetor.splice(0, vetor.length
 vetor.splice(remover o primeiro índice, e todos apartir dele até o tamanho do vetor);
    */

numeros.splice(0, numeros.length);


/* Solução 4 pop(); com loop ****NÃO RECOMENDADO****


Enquanto o comprimento do vetor for > 0
tire elementos*/
while(numeros.length > 0)
    numeros.pop();

