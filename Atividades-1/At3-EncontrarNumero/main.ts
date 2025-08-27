import inputUser = require('readline-sync')

const arrayDefinido: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const entradaUsuario: number = inputUser.questionInt('Digite um número: ')

let encontradoNumero: boolean = false

for (let i = 0; i < arrayDefinido.length; i++) {
  if (entradaUsuario === arrayDefinido[i]) {
    encontradoNumero = true
    console.log(
      `O número ${entradaUsuario} foi localizado na posição ${i} do array.`
    )
    break
  }
}

if (!encontradoNumero) {
  console.log(
    `O número ${entradaUsuario} não foi encontrado no array.`
  )
}

console.log('\nOs números do array são:')
console.table(arrayDefinido)