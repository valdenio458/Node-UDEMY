import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (_req, res) => {

res.send('Olá, mundo!')

});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});