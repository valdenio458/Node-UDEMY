import chalk from 'chalk';

const nota = 6

if (nota >= 7) {

console.log(chalk.green.bold(`Parabéns, você foi aprovado com a nota ${nota}!`));
} else {
    console.log(chalk.bgRed.black(`Infelizmente você foi reprovado com a nota ${nota}!`))
}