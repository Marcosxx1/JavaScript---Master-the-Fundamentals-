 
 function juros (principal, taxa, anos) {
    return principal * taxa / 100 * anos;
 }

 console.log(juros(10000, 3.5, 5));


 //Podemos definir um valor padrão para os argumentos
 function juros2 (principal, taxa = 3.5, anos = 5) {

 }