 /* Econtrando por tipos de referencia */

 const cursos = [
    {id: 1, nome: 'primeiro'},
    {id: 2, nome: 'segundo'},
 ]

 //cursos.includes({id:1, nome: 'primeiros'});


/* curso recebe a saída do método 'find' utilizado no
vetor cursos.

function(curso) {
    return curso.nome === 'primeiro';
 } 
a função acima é um predicado, retornando true ou false
se verdadeiro, mostra o nome do curso que é === a 'primeiro'

junta tudo que temos a forma de encontrar objetos!

*/
const curso = cursos.find(function(curso) {
    return curso.nome === 'primeiro';
 });

 console.log(curso);

/* Mesmo que o 'find' mas mostra o índice que o elemento está */
 const curso2 = cursos.findIndex(function(curso) {
    return curso.nome === 'primeiro';
 });

 console.log(curso2);

//_______________________________________________________
/* AULA 72-Arrow_Functions */
//                 variável vai até objeto.propriedade e verifica se é igual à 'algo'
const curso3 = cursos.find(curso => curso.nome === 'segundo');

