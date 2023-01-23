 /* Exercicio 
Divisivel por 3 -> Fizz
Divisivel por 5 -> Buzz
Divisivel por 3 && 5 ->FizzBuzz*/

const saida = fizzBuzz(15);
console.log(saida);

function fizzBuzz(saida) {
   if(saida % 3 ===0 && saida % 5 ===0) return 'FizzBuzz';
   if(saida % 3 === 0) return 'Fizz';
   if(saida % 5 === 0) return 'Buzz';
   if(saida !== 'number') return 'Não é válido';
}
 