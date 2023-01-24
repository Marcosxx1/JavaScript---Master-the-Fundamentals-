
const circulo = {
    raio: 1
};


circulo.color = 'yellow';
circulo.draw = function () {};

delete circulo.color;//deletar atributos
delete circulo.draw;
