import { Stack } from "../../Stack"
import inputUser = require('readline-sync')

const pilha = new Stack<string>
let opcao: number = 0

do {
  console.log("*****************************************************")
  console.log("                                                     ")
  console.log("            1 - Adicionar Cliente na Fila            ")
  console.log("            2 - Listar todos os Clientes             ")
  console.log("            3 - Retirar Cliente da Fila              ")
  console.log("            0 - Sair                                 ")
  console.log("                                                     ")
  console.log("*****************************************************")

  opcao = inputUser.questionInt('Escolha um número: ')

  switch(opcao){
    case 1: pilha.push(inputUser.question('Informe seu nome: ')); break
    case 2: console.log(pilha.printStack()); break
    case 3: console.log(pilha.pop()); break
    case 0: console.log('Saindo do sistema'); break
    default: console.log('Opção inválida')
  }

}while(opcao !== 0)