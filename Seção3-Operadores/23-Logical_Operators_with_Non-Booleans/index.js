 console.log(false || true);
 console.log(false || 'Marcos');
 console.log(false || 1);


 //Falsey (false) não sendo um desses abaixo, é true (Truthy)
 /* undefined 
    null
    0
    false
    ''
    NaN */

console.log(false || 1 || 2) //a saída será 1, pois assim que é encontrado um valor verdadeiro ele para. 'curto-circuito'


let corUsuario = undefined;
let corPadrão = 'blue';
let corAtual = corUsuario || corPadrão; 

console.log(corAtual);