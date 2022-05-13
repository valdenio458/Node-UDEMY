import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';

const app = express();



//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

//* read body
app.use(
  express.urlencoded({
    extended: true
  })
  )

app.use(express.json());

app.use(express.static('public'));

app.listen(3009) //* porta do servidor