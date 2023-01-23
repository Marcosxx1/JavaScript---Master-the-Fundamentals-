 /*  Break e continue */

 let i = 0;

 while (i <= 10) {
   //if (i === 5) break; quando 'i' chegar a certo valor, sai do loop

   if (i % 2 === 0) {
      i++;
      continue; /* Quando a condição for verdadeira
                  i vai ser incrementado de 1, deixando de ser par
                   o continue manda para o while novamente e volta a operação
                    */
   }


   console.log(i);
 }