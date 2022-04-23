import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import User from './models/User.js';

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
  )
  app.use(express.json()); 

//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.render('home');
  });
  
  conn
  .sync()
  .then(() => {  //* Cria a tabela User
    app.listen(PORT)      
    })
    .catch(err => {
      console.log(err);
    });
  


