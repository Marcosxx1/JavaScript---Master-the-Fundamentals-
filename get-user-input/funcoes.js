const Scanner = require("./scanner/scanner");


const scanner = new Scanner();
let matriz = [];

async function main() {
    mostraMenu();

    let entrada;

    while (entrada !== 10) {
        console.log("Digite uma opção: ");
        entrada = await scanner.nextInt();

        switch (entrada) {
            case 1:
                console.log("Digite a ordem horizontal: ");
                let ordemHorizontal = await scanner.nextInt();

                console.log("Digite a ordem vertical: ");
                let ordemVertical = await scanner.nextInt();

                await leMatriz(ordemVertical, ordemHorizontal);
                break;

            case 2:
                mostraMatriz();
                break;

            case 3:
                mostraMatrizInvertida();
                break;

            case 4:
                mostraMatrizTransposta();
                break;

            case 5:
                somaElementosPorLinha();
                break;

            case 6:
                somaElementosPorColuna();
                break;

            case 7:
                await verificaNumeroNasLinhas();
                break;

            case 8:
                await verificaNumeroNasColunas();
                break;
                
            case 9:
                somaDiagonalPrincipal();
                break;
            default:
                break;
        }
    }

    scanner.close();
}

function mostraMenu() {
    console.log(`
    (1) Ler matriz
    (2) Exibir matriz da primeira à última linha, da esquerda para direita
    (3) Exibir matriz da primeira à última linha, da direita para esquerda
    (4) Exibir a matriz transposta em relação à matriz original
    (5) Soma dos elementos de cada linha
    (6) Soma dos elementos de cada coluna
    (7) Busca elemento em todas as linhas
    (8) Busca elemento em todas as colunas
    (9) Soma dos elementos da diagonal principal
    (10) SAIR
    `)
}


async function leMatriz(ordemVertical, ordemHorizontal) {
    matriz = [];
    console.log(`Por favor, insira os elementos da matriz ${ordemVertical}x${ordemHorizontal}:`);
    for (let linha = 0; linha < ordemVertical; linha++) {
        matriz.push([]);
        for (let coluna = 0; coluna < ordemHorizontal; coluna++) {
            console.log(`Digite o elemento na posição [${linha + 1},${coluna + 1}]:`);
            matriz[linha][coluna] = await scanner.nextInt();
        }
    }
    console.log("Matriz inserida com sucesso:", matriz);
}

function mostraMatriz() {
    console.log("Matriz:");
    for (let linha = 0; linha < matriz.length; linha++) {
        let resultado = "[";
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            resultado += matriz[linha][coluna] + " ";
        }
        resultado += "]";
        console.log(resultado);
    }
}

function mostraMatrizInvertida() {
    console.log("Matriz (invertida):");
    for (let linha = 0; linha < matriz.length; linha++) {
        let resultado = "[";
        for (let coluna = matriz[linha].length - 1; coluna >= 0; coluna--) {
            resultado += matriz[linha][coluna];
            if (coluna !== 0) {
                resultado += " ";
            }
        }
        resultado += "]";
        console.log(resultado);
    }
}

function mostraMatrizTransposta() {
    console.log("Matriz Transposta:");
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        let resultado = "[";
        for (let linha = 0; linha < matriz.length; linha++) {
            resultado += matriz[linha][coluna];
            if (linha !== matriz.length - 1) {
                resultado += " ";
            }
        }
        resultado += "]";
        console.log(resultado);
    }
}

function somaElementosPorLinha() {
    console.log("Soma dos elementos por linha:");
    for (let linha = 0; linha < matriz.length; linha++) {
        let soma = 0;
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            soma += matriz[linha][coluna];
        }
        console.log(`Soma dos elementos na linha ${linha + 1}: ${soma}`);
    }
}

function somaElementosPorColuna() {
    console.log("Soma dos elementos por coluna:");
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        let soma = 0;
        for (let linha = 0; linha < matriz.length; linha++) {
            soma += matriz[linha][coluna];
        }
        console.log(`Soma dos elementos na coluna ${coluna + 1}: ${soma}`);
    }
}

async function verificaNumeroNasLinhas() {
    console.log("Digite um número inteiro para verificar se está presente em todas as linhas da matriz:");
    const w = await scanner.nextInt();
    let presenteEmTodasAsLinhas = true;

    for (let linha = 0; linha < matriz.length; linha++) {
        let presente = false;
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            if (matriz[linha][coluna] === w) {
                presente = true;
                break;
            }
        }
        if (!presente) {
            presenteEmTodasAsLinhas = false;
            break;
        }
    }

    if (presenteEmTodasAsLinhas) {
        console.log(`${w} está presente em todas as linhas da matriz.`);
    } else {
        console.log(`${w} não está presente em todas as linhas da matriz.`);
    }
}

async function verificaNumeroNasColunas() {
    console.log("Digite um número inteiro para verificar se está presente em todas as colunas da matriz:");
    const w = await scanner.nextInt();
    let presenteEmTodasAsColunas = true;

    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        let presente = false;
        for (let linha = 0; linha < matriz.length; linha++) {
            if (matriz[linha][coluna] === w) {
                presente = true;
                break;
            }
        }
        if (!presente) {
            presenteEmTodasAsColunas = false;
            break;
        }
    }

    if (presenteEmTodasAsColunas) {
        console.log(`${w} está presente em todas as colunas da matriz.`);
    } else {
        console.log(`${w} não está presente em todas as colunas da matriz.`);
    }
}

function somaDiagonalPrincipal() {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    console.log("Soma dos elementos da diagonal principal:", soma);
}

main();
