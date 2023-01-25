 
 const pessoa = {
   primeiroNome: 'Marcos',
   sobreNome: 'Alex',
   get nomeCompleto() {
      return `${pessoa.primeiroNome} ${pessoa.sobreNome}`
   },
   set nomeCompleto(valor) {
      const partes = valor.split(' '); 
      this.primeiroNome = partes[0];
      this.sobreNome = partes[1];

   }
 };

 pessoa.nomeCompleto = "Luiz Ferreira";


 //console.log(`${pessoa.primeiroNome} ${pessoa.sobreNome}`);