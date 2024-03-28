const Scanner = require("./scanner/scanner");

async function main() {
    const scanner = new Scanner();
  
    console.log("Digite seu nome:");
    const name = await scanner.nextLine();
  
    console.log("\n" + "Digite sua idade:");

    const age = await scanner.nextInt();
    console.log(name +", você tem " + age + " anos.");
  
    scanner.close();
  }
  
  main();