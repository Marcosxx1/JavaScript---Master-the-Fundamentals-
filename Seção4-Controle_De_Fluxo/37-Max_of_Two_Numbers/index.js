 /* Exercicio!!!
 Escrever uma função que recebe dois números
 e retorna o maior deles, bora bora!*/

 function retornaMaior(primeiro, segundo) {
    let aux;
    primeiro > segundo ? aux = primeiro: aux = segundo;

    return aux;
 }
console.log(retornaMaior(5,9));


/* resposta do vídeo */

let numero = max(3,3);
console.log(numero);

function max (a, b) {
    return (a > b) ? a : b;
}