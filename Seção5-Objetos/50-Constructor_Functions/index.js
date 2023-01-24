 
//Factory Function = fazem objetos

function criaCirculos(valorRaio, valorLocal) {
    return {
        valorRaio,
        draw() {
            console.log('draw');
        }
    };
}

//Semelhante a criar uma classe Circulo no java
//raio é o atributo
//draw é o método

function Circulo(raio) {
    this.raio = raio;
    this.draw = function() {
        console.log('draw');
    }
}

const circulo = new Circulo(1);

 
