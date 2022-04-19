import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

const PORT = 3000;

//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/dashboard', (_req, res) => {
  res.render('dashboard');
});

app.get('/', (_req, res) => {

  const user = {
    name: 'Diego',
    age: '23',
  };
  
  const time = 'Flamengo';

  const auth = false;

  const approved = true;

  res.render('home', { user , time , auth , approved });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}
);

