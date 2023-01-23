 /* Exercicio 
checaVelocidade
<= Velocidade máxima: 70
para cada 5 acima da velocidade máxima + 1 ponto
 na carteira
*/
console.log(checaVelocidade(130));

//Minha lógica
function checaVelocidade (velocidade) {
   let pontos = -1;
   if(velocidade <= 70) return 'Ok';

   if(velocidade > 70){
      velocidade -=70;
      for(let i = velocidade; i >= 0; i-=5) {
         if (velocidade % 5 === 0){
            pontos++;
         }
      }
      if(pontos >= 12) console.log('Habilitação cancelada');
   } return pontos;
}

/* Lógica do vídeo */

function checkSpeed(speed) {
   const speedLimit = 70;
   const kmPerPoint = 5;

   if(speed < speedLimit) console.log('Ok');
   else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      if(points >= 12)
      console.log('Licence suspended');
      else 
      console.log('Points', points);
   }
}

/* Minha lógica melhorada com a do vídeo */
function checaVelocidade (velocidade) {
   const velocidadeLimite = 70; //Definir uma constante para um valor fixo é uma boa ideia
   let pontos = -1;
   if(velocidade < velocidadeLimite) return 'Ok';

   if(velocidade > velocidadeLimite){
      velocidade -=70;
      for(let i = velocidade; i >= 0; i-=5) {
         if (velocidade % 5 === 0){
            pontos++;
         }
      }
      if(pontos >= 12) console.log('Habilitação cancelada');
   } return pontos;
}
 