import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql';

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

app.post('/books/insertbook', (req, res) => {
  const { title, author} = req.body;  

  const QUERY = `INSERT INTO books (title, author) VALUES ('${title}', '${author}')`;

  conn.query(QUERY, (err, _results) => {
    if (err) {
      console.log(err);
      res.send('Erro ao inserir livro');
    } else {
      res.redirect('/books');
    }
  });
});

app.get('/books', (_req, res) => {
  const QUERY = `SELECT * FROM books`;

  conn.query(QUERY, (err, results) => {
    if (err) {        
      console.log(err);
      res.send('Erro ao buscar livros');
      } else {
        res.render('books', { books: results });
        } 
        });
        });              
        

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'flamengo61',
  database: 'nodemysql2'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to MySql!');
}),

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  })


