// const inquirer = require('inquirer');
import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([ 
  {
    name: 'nome',
    message: 'Qual o seu nome?',
  },
  {
    name: 'idade',
    message: 'Qual a sua idade?',
  },
  ])
.then((answers) => {
    console.log(answers);
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.nome} e sua idade é ${answers.idade}`));
})
.catch((error) =>  console.log(error));
