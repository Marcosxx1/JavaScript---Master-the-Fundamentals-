 /* criar uma função que recebe um número variável
 de argumentos */

 function soma(...args) {
  if(Array.isArray(args[0])) return args[0].reduce(a, b)
 }