 const numeros = [2, 3, 1];
 
/* .every(); itera por todo o array
Quando encontra um 'valor' que não combina com a expressão, para  */
 const tudoPositivo = numeros.every(function(valor) {
   return valor >=0;
 });

 console.log(tudoPositivo);

/*  .some(); vai verificar se existe pelo menos 1 elemento que 
     combina com  expressão, quando encontrar para*/
 const peloMenos1Positivo = numeros.some(function(valor) {
   return valor >=0;
 });

 console.log(peloMenos1Positivo);
