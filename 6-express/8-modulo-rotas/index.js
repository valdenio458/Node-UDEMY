import express, { application } from 'express';
import path from 'path';
import routes from './routes/user.js';
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

app.use('/users', routes)

app.get('/', (_req, res) => {

res.sendFile(`${basePath}/index.html`)

});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});