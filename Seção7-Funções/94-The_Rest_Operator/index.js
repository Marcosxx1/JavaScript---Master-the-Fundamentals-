 /* rest operator (...args) 
 
 Quando utilizamos o 'rest operator (...args)
 como parâmetro de uma função, podemos passar 
 um número variável como argumentos e o 'rest operator'
 os colocara em um Array

 */
 function sum(desconto, ...precos) {
  const total = precos.reduce((a, b ) => a + b);
  return total * (1 - desconto);
 }

 console.log(sum(0.1, 20, 30));