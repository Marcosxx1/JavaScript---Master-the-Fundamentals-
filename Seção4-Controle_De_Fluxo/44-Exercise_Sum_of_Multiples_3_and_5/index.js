/* Exercício soma de multiplo de 3 e 5 */
soma(10);


/* Função que recebe um limite como parametro
cria uma variável

Executa um laço 'limite' vezes
Se o valor de i, nessas N vezes, for divisivel por 3 OU 5
adicionar à variável 'valor'
*/
function soma(limite) {
  let valor = 0;
  for (let i = 0; i <= limite; i++) {
      if(i % 3 === 0 || i % 5 === 0) valor+= i;
  }
  console.log(valor);
}



