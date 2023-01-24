/* 62-Address_Object Exercicio 
rua, cidade, cep
mostrarEndereço(endereco)

*/

const endereco = {
    rua: 'Rua Sexta feira 13',
    cidade: 'Alguma cidade',
    cep: 11111-111
};

function mostrarEndereço(endereco) {
     for (let key in endereco) {
        console.log(key,':', endereco[key]);
     }
}

mostrarEndereço(endereco);