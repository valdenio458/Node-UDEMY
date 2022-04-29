import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';

const app = express();

// const conn = require('./db/conn');

const PORT = process.env.PORT || 3009;

//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true
  })
  )

app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
} );