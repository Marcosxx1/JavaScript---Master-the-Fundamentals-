
let post = new Post('Titulo1', 'Corpo1', 'Autor1');

console.log(post);

function Post(titulo, corpo, autor) {
   this.titulo = titulo;
   this.corpo = corpo;
   this.autor = autor;
   this.visualisacoes = 0;
   this.comentarios = [];
   this.estaAtivo = false;
}
