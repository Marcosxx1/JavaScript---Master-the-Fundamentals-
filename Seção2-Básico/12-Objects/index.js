 /*
 Reference Types 
    Objetos
        - Possuem atributos e métodos
    Arrays
    Funções
 
 */

let nome = 'Marcos';
let idade = '50';

//definição do objeto
let pessoa = {  
    nome: 'Marcos',
    idade: 50
};

//Notação pro ponto . para ler ou alterar um atributo
pessoa.nome = 'Aline';

console.log(pessoa.nome);

//Notação por colchetes []
let selecao = 'nome';
pessoa[selecao] = 'Luiz';

console.log(pessoa.nome);