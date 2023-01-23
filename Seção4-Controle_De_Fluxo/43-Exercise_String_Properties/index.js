/* Exercício de propriedades de String */

const filme = {
  titulo: 'NomeFilme',
  dataLancamento: '2000',
  avaliacao: 4.5,
  diretor: 'b'
};

mostraPropriedades(filme);

function mostraPropriedades(atributo) {
  for (const key in atributo) {
    if (typeof atributo[key] === 'string')
      console.log(key, atributo[key]);
  }
}