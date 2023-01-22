/*
Arrays, vetores, é um tipo de estrutura de dados
Em Js pode armazenar vários tipos de variáveis

sempre começam do índice 0
Digamos que temos um Array[3];
[0][1][2]  = três posições

Podemos pensar em cada índice como sendo uma variável 
Podemos re-atribuir valores, acrescentar(linha 23) ou remover
*/

let coresSelecionadas;

coresSelecionadas = ['red', 'blue'];

//Mostra todos os índices do vetor
console.log(coresSelecionadas);

//Selecionando um índice específico
console.log(coresSelecionadas[0]);

//Adicionando mais um índice, o terceiro
coresSelecionadas[2] = 'green';

console.log(coresSelecionadas[2]);

console.log(typeof(coresSelecionadas));

//.length mostra o tamanho do vetor
console.log(coresSelecionadas.length);




