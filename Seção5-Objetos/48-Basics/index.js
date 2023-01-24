//POO, Programação Orientada a Objetos

/* Objetos possuem atributos como x e y
                E  Metodos como draw(); */
const circle = {
    radius: 1,
    local: {
        x: 1,
        y:1

    },
    ehVisivel: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();