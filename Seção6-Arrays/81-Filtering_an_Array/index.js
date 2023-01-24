 /* Filtar resultados em um array */

 const numeros = [1, -1, 2, 3];

 //filter itera por todo o array
 //retornando todos os valores que
 //satisfazem a expressão
 numeros.filter(function(valor) {
  return valor >= 0;
 });


 const filtrado = numeros.filter((n) => n >=0); 