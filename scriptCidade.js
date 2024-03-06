

const readlineSync = require("readline-sync")
const Cidade = require('./CidadeClass')

console.log("\t===========================================");
console.log("\t ----- Dados da cidade e População -----");
console.log("\t===========================================");

let nome = readlineSync.question("Digite o nome da cidade: ")
let estado = readlineSync.question("Digite o Estado da cidade: ")
let numPopulacao = Number(readlineSync.question("Digite o número de habitantes: "))
let numHomens = Number(readlineSync.question("Digite o número de homens na cidades: "))
let numMulheres = Number(readlineSync.question("Digite o número de mulheres da cidade: "))

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()

console.log("_____________________________________\n")
console.log("|                                   |\n")
// console.log("|                                   |\n")
console.log("|                                   |\n")
console.log("|                                   |\n")
console.log("|  Resultado sobre dados da cidade  |\n")
console.log("|                                   |\n")
console.log("|                                   |\n")
// console.log("|                                   |\n")
console.log("|___________________________________|\n")
console.log(`O percentual de homens é ${homensPercentual}% de ${numPopulacao}`);
console.log(`O percentual de homens é ${mulheresPercentual}% de ${numPopulacao}`);