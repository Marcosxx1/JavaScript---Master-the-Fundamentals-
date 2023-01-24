 const filmes = [ 
    {titulo:'Titlo1' ,ano: '2018', avaliacao: 4.5},
    {titulo:'Titlo2' ,ano: '1998', avaliacao: 4.2},
    {titulo:'Titlo3' ,ano: '2018', avaliacao: 4.8},
    {titulo:'Titlo4' ,ano: '2018', avaliacao: 4.3},
 ];

 /* Todos os filmes em 2018 com avaliação > 4
    Ordenar por avaliação
    Ordem descendente
    Mostrar título */

const titulos = filmes
.filter(m => m.ano === 2018 && m.avaliacao >= 4)
.sort((a, b) => a.avaliacao - b.avaliacao)
.reverse()
.map(m => m.titulo)

console.log(titulos);