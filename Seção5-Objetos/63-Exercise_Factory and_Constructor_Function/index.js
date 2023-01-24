 
 
 /* Com factory */
 
 function criaEnderecos(nome, cidade, cep) {
 return {
    nome,
    cidade,
    cep
 };
}


 const endereco1 = criaEnderecos('Rua 1', 'cidade1', '1111111');

 console.log(endereco1); 



/* Com Construtor  */
function Endereco(end2, cid2, cep) {
    this.nome = end2;
    this.cidade = cid2;
    this.cep = cep;
}

let end2 = 'Endereço2';
let cid2 = 'Cidade2';
let cep  = '2222222';

const endereco = new Endereco(end2, cid2, cep);

console.log(endereco);

