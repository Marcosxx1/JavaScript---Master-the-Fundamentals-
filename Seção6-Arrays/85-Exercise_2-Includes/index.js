 /* Exercicio Array 2*/

 const numeros = [1, 2, 3, 4];

 console.log(numeros.includes(numeros, 1));

 function includes(numeros, elemento) {
  for(let numero of numeros)  
    if(numero === elemento) 
      return true;
    return false; 
 }

 console.log(numeros.includes(numeros, 1));