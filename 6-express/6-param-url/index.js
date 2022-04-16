import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

const PORT = 3000;

const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {
  const { id }= req.params;

  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (_req, res) => {

res.sendFile(`${basePath}/index.html`)

});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});