import inputUser = require('readline-sync')

const setNumeros: Set<number> = new Set<number>();

while (setNumeros.size < 10){
    const entradaUsuario: number = inputUser.questionInt('Digite um numero: ')
    setNumeros.add(entradaUsuario)
}
console.log(`\n Listar todas os numeros: `)
console.table(setNumeros)