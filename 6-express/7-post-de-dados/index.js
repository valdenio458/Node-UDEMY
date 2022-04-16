import express, { application } from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

//* ler o body:
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const PORT = 3000;

const basePath = path.join(__dirname, 'templates');

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)
  const { name, age } = req.body;
  res.sendFile(`${basePath}/userform.html`);

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos de idade`);

})
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