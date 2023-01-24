/* Exercicio Array 4*/

const numeros = [1, 2, 3, 4];

const saida = move(numeros, 0, 1);

/* indice a ser movido,  */


/* função que recebe 
           um    array, índice, local */
function move(numeros, indice, desloca) {
    //  atribuimos á variável valor o elemento que queremos mover
    const valor = numeros[i];

    //  removemos do array original o elemento
    numeros.splice(indice, 1);

    //adicionamos novamente o valor RELEMBRANDO
    // .splice(X, Y) X = elemento a ser removido ou adicionado
    //               Y = quantos elementos serão removidos
    //nesse caso        0     +  1,      ↗não removemos nada, e adicionamos de volta o valor guardado 
    numeros.splice(indice + desloca, 0, valor);
    return numeros
}

function move(numeros, indice, desloca) {
    const valor = numeros[indice];
    numeros.splice(indice, 1);
    numeros.splice(indice + desloca, 0, valor);
    return numeros
} //Preciso consertar isso, está 'meio' funcionando, ou seja, não funciona haha


/* Lógica do vídeo */
function mover(numeros, indice, offset) {
    const posicao = indice + offset;
    if(posicao >= numeros.length || posicao <0) {
        console.error('Inválido');
        return;
    }

    const saida = [...numeros];
    const elemento = saida.splice(indice, 1)[0];
    saida.splice(posicao, 0, elemento);
    return saida;
}