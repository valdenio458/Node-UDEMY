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

app.get('/books/:id', (req, res) => {
  const { id } = req.params;

  const QUERY = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(QUERY, (err, results) => {
    if (err) {

      console.log(err);

      res.send('Erro ao buscar livro');

    } else {

      res.render('book', { book: results[0] });

    }
  });
});

app.get('/books/edit/:id', (req, res) => {
  const { id } = req.params;

  const QUERY = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(QUERY, (err, results) => {
    if (err) {

      console.log(err);

      res.send('Erro ao buscar livro');

    } else {

      res.render('editbook', { book: results[0] });

    }
  });
});

app.post('/books/updatebook', (req, res) => {
  
  const { id, title, author } = req.body;

  const QUERY = `UPDATE books SET title = '${title}', author = '${author}' WHERE id = ${id}`;

  conn.query(QUERY, (err, _results) => {
    if (err) {
      console.log(err);
      res.send('Erro ao atualizar livro');
    } else {
      res.redirect('/books');
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


