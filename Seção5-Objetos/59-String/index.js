
/* String Object */

/* String primitive */
const mensagem = 'oi';//Js coloca os métodos do Objeto no primitivo

/* string object */
const outro = new String('oi');


console.log(mensagem.length); //Tamanho da String

console.log(mensagem[0]); //mostra o primeiro elemento
console.log(mensagem[1]); //mostra o segundo elemento


console.log(mensagem.includes('o'));//.includes mostra se existe a string a ocorrencia

console.log(mensagem.startsWith('o'));//Se começa com algo


console.log(mensagem.endsWith('i'));//Termina com
console.log(mensagem.indexOf('o'));//Mostra o índice da letra, numero, símmbolo..

console.log(mensagem.toLocaleLowerCase);//minusculo

console.log(mensagem.toUpperCase);//maiusculo


console.log(mensagem.trim);//Tira os espaços em branco antes e depois

/* Aprender:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/


