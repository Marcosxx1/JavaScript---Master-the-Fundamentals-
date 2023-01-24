//POO, Programação Orientada a Objetos

/* Objetos possuem atributos como x e y
                E  Metodos como draw(); */


//Factory Function = fazem objetos

function criaCirculos(valorRaio, valorLocal) {
    return {
        valorRaio,
        draw() {
            console.log('draw');
        }
    };
}

const circulo1 = criaCirculos(1);
console.log(circulo1);


const circulo2 = criaCirculos(2);
console.log(circulo2);


 
