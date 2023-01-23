/* Exercicios números primos */

//Recebe até quanto vai
function mostraPrimo(limite) {

  //1 for começa de 2 até o limite
  for (let numero = 2; numero <= limite; numero++) {
    //define é primo como verdadeiro
    let ehPrimo = true;

    //Define o fator, se o resto da divisão de 'numero'
    //pelo fator for 0, para;
    for (let fator = 2; fator < numero; fator++) {
      if (numero % fator === 0) {
        ehPrimo = false;
        break;
      }
    }
    //caso não parar é primo, e como está dentro do 1 for
    //vai continuar
    if(ehPrimo) console.log(numero);
  }

} 