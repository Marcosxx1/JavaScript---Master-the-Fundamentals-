const numeros = [1, 2, 3, 4];

/* removendo elementos
começo = shift
meio   = splice
final  = pop
*/



//shift remove e retorna o PRIMEIRO valor atribuindo
//a variável 'primeiro'
const primeiro = numeros.shift();

//splice recebe como ARGUMENTO o índice do valor
//que queremos remover
//numeros.splice(2); //Remove o 0, 1, 2. terceiro índice

//pode receber também o número de elementos que queremos remover

numeros.splice(2, 1);//Remove o 0, 1, 2. terceiro índice, e apenas 1 numero



//pop remove e retorna o ULTIMO valor, por isso atribuimos 
//o valor retornado par 'ultimo'
const ultimo = numeros.pop;
console.log(ultimo);


