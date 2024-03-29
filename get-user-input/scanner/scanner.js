const readline = require('readline');


class Scanner {

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async nextLine() {
        return new Promise((resolve) => {
            this.rl.question('', (input) => {
                resolve(input.trim());
            });
        });
    }

    async nextInt() {
        const input = await this.nextLine();
        return parseInt(input);
    }

    async nextFloat() {
        const input = await this.nextLine()
        return parseFloat(input)
    }

    close() {
        this.rl.close();
    }
}

module.exports = Scanner;
