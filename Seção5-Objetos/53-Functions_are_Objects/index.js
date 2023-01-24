function Circulo(raio) {
   this.raio = raio;
   this.draw  = function () {
      console.log(draw);
   }
}


//Em Js, funções são Objetos
const Circulo1 = new Function('raio', `
   this.raio = raio;
   this.draw  = function () {
   console.log(draw);
}`);

Circulo.call({}, 1);
Circulo.apply({}, [1, 2, 3]);

const outro = new Circulo(1);