 
 const pessoa = {
   primeiroNome: 'Marcos',
   sobreNome: 'Alex',
   get nomeCompleto() {
      return `${pessoa.primeiroNome} ${pessoa.sobreNome}`
   },
   set nomeCompleto(valor) {
      const e = new Error();
      if(typeof value !== 'string')
      throw new Error('Valor não é uma string.')

      const partes = valor.split(' '); 
      if(partes.length !==2)
         throw new Error('Digite o nome e sobrenome');
      this.primeiroNome = partes[0];
      this.sobreNome = partes[1];

   }
 };

try {
   pessoa.nomeCompleto = '';
} catch (e) {
   alert(e);
}
console.log(pessoa);

 