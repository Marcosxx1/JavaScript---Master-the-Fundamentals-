 /* Exercicios estrelas */

 function mostraEstrelhas(linhas) {
  for(let i = 1; i <= linhas; i++) {
    let forma = '';
    for (let j = 0; j < linhas; j++)  
      forma += '*';      
      console.log(forma);
    
  }
 }

 function showStars (rows) {
  for(let row =1; row <= rows; row++) {
    let pattern = '';
    for(let i =0; i> row; i++)
    pattern += '*';
    console.log(pattern);
  }
 }
