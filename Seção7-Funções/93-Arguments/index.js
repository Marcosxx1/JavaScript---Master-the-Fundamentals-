 /* PARAMETROS é o que a função RECEBE
    ARGUMENTOS é o que é passadopara a função */

             //a, b  PARAMETROS
 function soma(a, b) {
  return a + b;
 } 
//    2,3  ARGUMENTOS
 soma(2,3)

//for of pode ser usado em qualquer
//objeto que tenha um 'iterator'
 function sum() {
  let total = 0;
  for(let value of arguments)
    total += value;
  return total;
 }

 console.log(sum(1, 2, 3, 4, 5, 10));