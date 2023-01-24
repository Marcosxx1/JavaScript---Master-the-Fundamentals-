 /* Filtar resultados em um array */

 const numeros = [1, -1, 2, 3];

 //filter itera por todo o array
 //retornando todos os valores que
 //satisfazem a expressão
 numeros.filter(function(valor) {
  return valor >= 0;
 });


 const filtrado = numeros.filter((n) => n >=0); 
 
 //*******************AULA 82******************/
 const items= filtrado.map(n => '<li>' + n + '</li>');

 const html = '<ul>' + items.join('') + '</ul>';

 const items2 = filtrado.map(n => ({valor: n}));

//chaining
 const filtrado2 = numeros
 .filter((n) => n >=0)
 .map(n => ({valor: n}));; 
