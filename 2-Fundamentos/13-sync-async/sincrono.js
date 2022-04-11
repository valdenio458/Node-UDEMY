const fs = require('fs');

console.log('Inicio');

fs.writeFileSync('archivo.txt', 'Oi');

console.log('Fim');