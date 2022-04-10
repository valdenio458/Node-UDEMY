const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

console.log(argv);

const nome = argv['nome'];
const profissao = argv['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e sua profissão é ${profissao}!`);