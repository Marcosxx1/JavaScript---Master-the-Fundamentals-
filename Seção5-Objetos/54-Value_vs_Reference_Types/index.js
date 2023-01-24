 
 let x = {valor: 10};
 let y = x;

 x.valor = 20;

 /* Tipos Primitivos são copiados pelo seu valor
    Objetos são copiados por sua REFERENCIA */

let objeto = {valor: 10};

function aumento (obj) {
   objeto.valor++;
}

aumento(objeto);
console.log(objeto);

 
