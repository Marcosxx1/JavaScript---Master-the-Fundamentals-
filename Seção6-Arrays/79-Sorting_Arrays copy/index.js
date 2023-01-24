 const numeros = [2, 3, 1];

 /* organizando arrays */
 numeros.sort();
 console.log(numeros);

 numeros.reverse(); //Inverte a ordem
 console.log(nueros);

 const cursos = [
    {id: 1, nome: 'Node.js'},
    {id: 2, nome: 'JavaScript'},
 ];

 /* implementação do vídeo */
 cursos.sort(function(a, b) {
    //a < b => -1 (false)
    //a > b =>  1 (true)
    //a === b => 0 (sem alteração)
    const nomeA = a.nome.toLocaleUpperCase();
    const nomeB = b.nome.toLocaleUpperCase();

    //CTRL + D depois de selecionar uma variável
    //para mudar todas as ocorrencias da mesma dentro de um scopo
    if(nomeA < nomeB) return -1;
    if(nomeA > nomeB) return 1;
    return 0;
 });

