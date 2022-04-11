const x = '10';

//* verificar se x é um número:

if(!Number.isInteger(x)) {
  throw new Error('x não é um número');
};

console.log('Continuando o código...');
