import express from "express";

const app = express();

const PORT = 3000;

app.use(
  express.urlencoded({
    extended: true,
    })
);

app.use(express.json());

// rotas - endpoints
app.get('/', (req, res) => {

  res.status(200).json({ message: 'Primeira rota criada com sucesso!' });
})

app.post('/create', (req, res) => {

  const { name, price } = req.body;

  if(!name || !price) {
    return res.status(400).json({ error: 'Dados insuficientes' });
  }

  res.status(201).json({ message: `Produto ${name} criado com sucesso! Preço: ${price}` });

}
);
app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});

