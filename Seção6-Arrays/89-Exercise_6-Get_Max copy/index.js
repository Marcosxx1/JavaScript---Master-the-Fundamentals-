 const numeros = [1, 2, 3, 4, 10];

const max = maxNum(numeros);

console.log(max);

function maxNum(numeros) {
    let maior = numeros[0];
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maior) maior = numeros[i];
    }
    return maior;
}

numeros.reduce((a,b) => {
    return (a > b) ? a : b;
});