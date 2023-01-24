 /* Exercicio Array 3*/

 const numeros = [1, 2, 3, 4];
 
 function exclui(numeros, ahExcluir) {
    const saida = [];

    for(let numero of numeros)  
        if(!ahExcluir.includes(numero))
        saida.push(numero);
        return saida;
    
 }

 const saida2 = exclui(numeros, [1]);
 console.log(saida2);
