import inputUser = require('readline-sync')


const conjuntoDefinido: Set<number> = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const entradaUsuario: number = inputUser.questionInt('Digite um número: ')

if (conjuntoDefinido.has(entradaUsuario)) {
  console.log(`O número ${entradaUsuario} foi encontrado no conjunto.`)
} else {
  console.log(`O número ${entradaUsuario} não foi encontrado no conjunto.`)
}

console.log('\nOs números do conjunto são:')
console.table(Array.from(conjuntoDefinido))
