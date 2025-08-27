import { Queue } from "../../Queue";
import inputUser = require("readline-sync");

const fila = new Queue<string>();
let opcao: number = 0

do {
  // Menu feioso:
  console.log("*****************************************************")
  console.log("                                                     ")
  console.log("            1 - Adicionar Cliente na Fila            ")
  console.log("            2 - Listar todos os Clientes             ")
  console.log("            3 - Retirar Cliente da Fila              ")
  console.log("            0 - Sair                                 ")
  console.log("                                                     ")
  console.log("*****************************************************")

  opcao = inputUser.questionInt('Escolha um número: ')

switch (opcao) {
    case 1: fila.enqueue(inputUser.question('Digite seu nome: ')); break
    case 2: console.log(fila.printQueue()); break
    case 3: console.log(fila.dequeue()); break
    case 0: console.log('Saindo do sistema'); break
    default: console.log('Opção inválida'); break
}

} while (opcao !== 0)



