 /* let e var */

 function comeco() {
  for(var i = 0; i < 5; i++) 
    console.log(i);
   /* var não é limitada ao escopo que
      é definida
      Mas sim limitada a função que foi declarada */
    console.log(i);
 }

 comeco();

 /* var => escopo de função
    ES6 (ES2015) let, const => escopo de bloco */

////////////////////////////////////////////////////

/* var se 'gruda' ao windowd object do navegador */
var cor = 'red';
let age = 30;

function dizOi(){
  console.log('Oi');
}