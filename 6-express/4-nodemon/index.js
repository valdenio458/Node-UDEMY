import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

const PORT = 3000;

const basePath = path.join(__dirname, 'templates')

app.get('/', (_req, res) => {

res.sendFile(`${basePath}/index.html`)

});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});