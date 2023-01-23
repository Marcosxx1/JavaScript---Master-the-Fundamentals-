 /* Declaração switch case 
 
 Literalmente o nome, recebe um valor e 'TROCA'
 outro caso

 por exemplo ali em baixo
 swith recebe uma nome e troca para cada um dos casos
 */

 let funcao;


 switch (funcao) {
    case 'convidado':
        console.log('Usuário convidado');
        break;

    case 'Adiministrador':
        console.log('Usuário Adiministrador');
        break;
 
    default:
        console.log('Usuário desconheido');
 }