import inputUser = require('readline-sync');

const cores: Array<string> = [];

for (let i = 0; i < 5; i++) {
    const entradaUsuario: string = inputUser.question(`Digite a cor ${i + 1}: `);
    cores.push(entradaUsuario);
}

console.log('\nListar todas as cores:');
for (const cor of cores) {
    console.log(cor);
}

console.log('\nOrdenar as cores:');
const coresOrdenadas = [...cores].sort();
for (const cor of coresOrdenadas) {
    console.log(cor);
}
