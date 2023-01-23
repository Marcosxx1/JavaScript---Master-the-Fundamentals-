/* Função para mostrar numeros pares ou impares */

let numero = 10;
 console.log(parOuImpar2(numero));

 function parOuImpar (numero) {
   for(let i = 0; i < numero; i++) {
     console.log( i % 2 === 0 ? 'par' : 'impar');
   }
}


function parOuImpar2 (numero) {
   for(let i = 0; i < numero; i++) {
     if(i % 2 === 0) console.log(i, 'par');
     else console.log(i,'impar');
   }
}

