 /* Reduzir um array */

 const numeros = [1, -1, 2, 3];


 let soma = 0;

 for (let numero of numeros) {
    soma+= numero;
 }

 const soma2 = numeros.reduce((acomulador, valorAtual) =>{
    return acomulador + valorAtual;
 }, 0);
 
 /* O prieiro ARGUMENTO é uma callback Function

 (acomulador, valorAtual) =>{
    return acomulador + valorAtual;


 0 (linha 14) segundo ARGUMENTO que é o valor inicial do acomulador */