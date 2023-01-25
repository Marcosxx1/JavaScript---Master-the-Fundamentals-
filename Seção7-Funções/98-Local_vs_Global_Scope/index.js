/* Escopo
   determina onde a variável ou constante
   será acessível
   
   */ 
 function comeco(){
   const mensagem = 'oi';

   if(true) {
      const outro = 'tchau';
   }

   for(let i = 0; i < 5; i++) {
      console.log(i);
   }

 }

 console.log(mensagem);
 console.log(outro);
 console.log(i);

//////////////////////////////////////////

const cor = 'red';//global

 function comeco2() {
   const mensagem = 'oi';
   const cor = 'blue'; //variaveis locais, ou const locais tomam precedencia sobre as globais
   console.log(cor);
 }

 function parar() {
   const mensagem = 'tchau';
 }

 começo2