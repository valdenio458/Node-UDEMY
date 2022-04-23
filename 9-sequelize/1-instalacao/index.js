import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';

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
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  })


