 /* the 'this' Keyword 
 
this faz referencia ao objeto que está
executando a função atual 

metodo -> obj
function -> global(window, global)
 */


const video = {
  titulo: 'titulo1',
  tags: ['a', 'b', 'c'],
  iniciar() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};

function Video(titulo) {
  this.titulo = titulo
  console.log(this);
};

const v = new Video('titulo2');


const video2 = {
  titulo: 'titulo3',
  tags: ['a', 'b', 'c'],
  mostraTags() {
    this.tags.forEach(function(tag){
      console.log(this.titulo, tag);
    }, this);
  }
 
};


