/* Iterando pelo Array
 for of
*/
const numeros = [1, 2, 3];

//for of
console.log('for...of');
for( let numero of numeros) 
  console.log(numero);

//for each
/* para cada numero em numeros, me mostre cada elemento, no caso 'numero */
console.log('for each');
numeros.forEach(function(numero){
  console.log(numero);
});

/* for each com Arrow Function */
console.log('for each Arrow Function')
numeros.forEach(numero => console.log(numero));

//Também podemos utilizar a Arrow Function para mostrar o índice

console.log('for each mostrando índice');
numeros.forEach((numero, index) => console.log(`indice ${index}, valor ${numero}`));


