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

  res.json({ message: 'Primeira rota criada com sucesso!' });
})

app.post('/create', (req, res) => {

  const { name, price } = req.body;

  console.log(name);

  res.json({ message: `Produto ${name} criado com sucesso! Preço: ${price}` });

}
);
app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});

