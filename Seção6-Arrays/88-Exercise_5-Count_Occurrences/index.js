 const numeros = [1, 2, 3, 4,1];

 const count = contaOcorrencia(numeros, 1);


 function contaOcorrencia(numeros, elemento){
    let contador = 0;
    for(let numero of numeros) 
        if(numero === elemento) contador++;
    return contador;
 }
 