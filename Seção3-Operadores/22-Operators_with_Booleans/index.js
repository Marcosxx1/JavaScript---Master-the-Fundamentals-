/* Operadores lógicos
&& E lógico = as duas expressões devem ser verdadeiras
|| OU lógico = uma das duas expressões devem ser verdadeiras:
*/

 

console.log (1 > 2 && 3 > 2); // false pois 1 não é > que 2
console.log (1 < 2 && 3 > 2); // verdadeiro pois 1 é < que 2


console.log (1 > 2 || 3 > 2); // verdadeiro, pois 3 > 2
console.log (1 < 2 || 3 > 2); // verdadeiro pois 1 é < que 2

let salarioAlto = true;
let bomScore = true;

let podeEmprestar = salarioAlto && bomScore;
console.log(podeEmprestar);

//Utilizando ||, OU, só uma das afirmações precisa ser verdade

salarioAlto = false;
bomScore = true;

podeEmprestar = salarioAlto || bomScore;
console.log(podeEmprestar);

/* Lembrando que podemos negar afimações, por exemplo:
salarioAlto = true, ok
! utilizamos exclamação para negar
!salarioAlto passa a ser false

*/

