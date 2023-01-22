 /* Declarações Condicionais
 if () {

 }
 else {

 }
 
 switch(key) {
    case x:
        break;
        default;
 }
 
 */

 /* Se a hora esta entre 6am e 12pm: Bom dia!
    Se a hora está entre 12pm e 6mp: Boa tarde!
    senão: Boa noite! */
let hora = 22;

if(hora  >= 6 && hora < 12) {
    console.log('Bom dia!');
} else if( hora > 12 && hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}