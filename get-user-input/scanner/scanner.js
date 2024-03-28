const readline = require('readline');

/**
 * Classe para leitura de entrada do usuário.
 */
class Scanner {
  /**
   * Cria uma nova instância do Scanner.
   */
  constructor() {
    // Cria uma interface de leitura.
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * Lê a próxima linha da entrada do usuário.
   * @returns {Promise<string>} Uma Promise que resolve com a linha lida.
   */
  async nextLine() {
    return new Promise((resolve) => {
      // Pergunta ao usuário e aguarda a entrada.
      this.rl.question('', (input) => {
        resolve(input.trim());
      });
    });
  }

  /**
   * Lê o próximo número inteiro da entrada do usuário.
   * @returns {Promise<number>} Uma Promise que resolve com o número inteiro lido.
   */
  async nextInt() {
    const input = await this.nextLine();
    return parseInt(input);
  }

  /**
   * Fecha o scanner, liberando recursos.
   */
  close() {
    this.rl.close();
  }
}

module.exports = Scanner;
