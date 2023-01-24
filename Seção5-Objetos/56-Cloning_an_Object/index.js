/* Clonar um objeto */

const circulo = {
   radius: 1,
   draw() {
      console.log('draw');
   }
 };

/*  const outro = {}; //Objeto vazio

 for(let key in cirulo) {
   outro[key] = circulo[key];
 } 
  outro['raio'] = circulo['raio'];
 
 */
Object.assign({}, circulo); 
/* O método 'assign' de object, pega todas as propriedas
do objeto 'circulo' e copia tudo para o novo objeto {}
abaixo utilizamos esse método para atribuir ao novo objeto */ 

//const outro = Object.assign({}, circulo);

/* outro = {} recebe tudo de circulo! */

/* const outro2 = Object.assign({
   color: 'yellow',
}, circulo);
 */

/* spread operator  pega todos os atributos e métodos de 
um objeto e atribui a outro*/
const outro = { ...circulo};



/* RELEMBRANDO
Object.assign -> copia os atributos e métodos e um ou mais objetos
                em outro objeto. Clonar um objeto, ou combinar vários 
                objetos.
spread operator
= { ...objeto} é utilizado para colocar todos os atributos e métodos de um objeto em outro



*/