 /* Combinando e dividindo Arrays */

 const primeiro = [1, 2, 3];
 const segundo = [4, 5, 6];

 /* vetor.contat(segundoVetor);
   o método concat combinará os dois vetores e 
   retornará o vetor resultante
   devemos atribuir a um novo vetor essa saída */

 const combinado = primeiro.concat(segundo);
 console.log(combinado);


/* vetor.slice(); mesmo procedimento do concat, mas
   esse método 'corta' o vetor apartir de um índice
   até outro índice*/

   /* começa no 0, 1, 2. índice 3(2) e 'corta' até o índice 4*/
const dividido = combinado.slice(2, 4);
// dividido = combinado.slice(2); //mas também podemos apenas pegar a partir de um índice

console.log(combinado);
console.log(dividido);

/* LEMBRANDO caso existam Objetos no array, apenas a referencia é copiada
            e o resultado, a variável que foi atribuida com os valores
            também apontará para o objeto */

const vetorObj = [{id: 1}];

