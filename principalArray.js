const readlineSync = require('readline-sync')

let nA1 = [1,2,3,4,5]
let nA2 = []
let nSoma = []


let valor = 0.0

function soma() {
    for (let i = 0; i < 5; i++) {
        nSoma[i] = nA1[i] + nA2[i]
    }
    // console.log("\t A soma dos arrays é: " + nSoma);
    return nSoma
}

function ler() {
    let contador = 0.0

    while (contador <= 4) {
        valor = Number(readlineSync.question('\tDigite um valor para salvar no array: \n'))
        nA2.push(valor)
        contador += 1
    }
    return nA2
}

console.log("\t=============================");
console.log("\t Soma dos valores de 2 arrays");
console.log("\t=============================");

let leia = ler()
let resp = soma()

console.log("\tO 1º Array é: " + nA1)
console.log("\tO 2º Array é: " + leia)

console.log("A soma dos arrays é: " + resp)