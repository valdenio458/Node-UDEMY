//* mais de um valor:
const x = 10;
const y = 'Flamengo';
const z = [1,2,3,4,5];

console.log(x, y, z);

//* contagem de impressões:
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

//* variável entre string:
console.log('O %s é o melhor time do Brasil!', y);

//* limpar console:
setTimeout(() => {
  console.clear();
}, 5000);

