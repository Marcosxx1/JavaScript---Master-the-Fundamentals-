 /* Spread operator */

 const primeiro = [1, 2, 3];
 const segundo = [4, 5, 6];
 
 
  const combinado = [...primeiro, ...segundo];//é o mesmo que
//const combinado = primeiro.concat(segundo);

//sem passar argumentos para .slice(); 
//ele só copia o combindo para a variável 'dividido'
  const dividido = combinado.slice();

  const copia = [...combinado];//é o mesmo que
//const copia = combinado.slice();