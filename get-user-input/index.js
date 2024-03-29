const Scanner = require("./scanner/scanner");

const scanner = new Scanner();
let vetor = []

async function main() {

    mostraMenu()

    let entrada

    while (entrada != 10) {
        mostraMenu()

        console.log("Digite uma opção: ")

        entrada = await scanner.nextInt()

        switch (entrada) {
            case 1:

                console.log("Lendo vetor: ")

                await leVetor()
                continue;
            case 2:
                console.log("Mostra o vetor")

                mostraVetor()
                continue;
            case 3:
                console.log("Inverte o vetor")

                inverteVetor()
                continue;

            default:
                break;
        }
    }

    scanner.close();
}



main();

async function leVetor() {

    for (let i = 0; i < 10; i++) {
        console.log("Digite o " + (i + 1) + " valor")
        let entradaDoUsuario = await scanner.nextInt()
        vetor[i] = entradaDoUsuario
    }

}

function mostraVetor() {
    for (let i = 0; i < vetor.length; i++) {
        console.log(`[${vetor[i]}] `)
    }
}

function inverteVetor() {
    let tamanho = vetor.length;
    let meio = Math.floor(tamanho / 2) // encontramos o meio do vetor

    for (let i = 0; i < meio; i++) {
        let temp = vetor[i];
        vetor[i] = vetor[tamanho - 1 - i];
        vetor[tamanho - 1 - i] = temp;
    }
}

function mostraMenu() {
    console.log(`
    (1) Ler vetor
    (2) Exibir vetor
    (3) Inverter vetor
    (10) SAIR
    `)
}