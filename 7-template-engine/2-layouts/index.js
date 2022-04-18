import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

const PORT = 3000;

//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/', (_req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}
);

