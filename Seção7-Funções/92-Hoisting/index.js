 
 /*Function Declaration
  Podemos invocar a função antes
  de ela ser definida
  
  isso é chamado de 
  HOISTING: É O PROCESSO DE MOVER
  FUNCTION DECLARATIONS PARA O TOPO DO ARQUIVO
  FEITO AUTOMATICAMENTE
  */
 function andar() {
   console.log('andar');
 }

 //Function Expression não
 //pode ser chamada antes de ser iniciada
 let correr = function() {
   console.log('correr');
 };
 