/* Encontrar elementos
depende se esta guardando primitivos ou tipos de referencia no vetor */


const numeros = [1, 2, 3, 1, 4];

//Mostra índice do elemento
numeros.indexOf(1);

//última ocorrencia do elemento
numeros.lastIndexOf(1);

//boolean que retorna verdadeiro caso exista o elemento
//                    falso caso não exista
numeros.includes(1);


/* Procura por 1, a partir do terceiro índice: 0, 1, 2  */
numeros.indexOf(1, 2);