/* Operadores BitWise */


/* 1 = 8 bits -> 00000001
   2 = ||     -> 00000010
   ... */

console.log( 1 | 2); 
/* A saída acima será 3 pois 
    00000001   Pois OR é soma. 
  + 00000010  nesse caso
    ________
    00000011  = 3
    */


console.log( 1 & 2); 
/* A saída acima será 0 pois 
    00000001     AND é multiplicação
  * 00000010
    ________  nesse caso
    00000000  = 0
    */

//Ler,   Escrever,   Executar
//001,     010        011
//1         2          3

const permissaoLer = 1;
const permissaoEscrever = 2;
const permissaoExecutar = 3;

let minhaPermissao = 0;

minhaPermissao = minhaPermissao | permissaoLer | permissaoEscrever;

let mensagem = (minhaPermissao & permissaoLer) ? 'sim' : 'não';

console.log(mensagem);