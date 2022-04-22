import express from 'express';
import exphbs from 'express-handlebars';
import pool from './db/conn.js';

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

  const QUERY = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const data = ['title', 'author', title, author];
  pool.query(QUERY, data, (err, _results) => {
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

  pool.query(QUERY, (err, results) => {
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

  const QUERY = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id];
  pool.query(QUERY, data, (err, results) => {
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

  const QUERY = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id];
  pool.query(QUERY, data, (err, results) => {
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

  const QUERY = `UPDATE books SET ?? = ?, ?? = ?' WHERE ?? = ?`;
  const data = ['title', title, 'author', author, 'id', id];

  pool.query(QUERY, data, (err, _results) => {
    if (err) {
      console.log(err);
      res.send('Erro ao atualizar livro');
    } else {
      res.redirect('/books');
    }
  });
});

app.post('/books/remove/:id', (req, res) => {
  const { id } = req.params;
    
  const QUERY = `DELETE FROM books WHERE ?? = ?`;
  const data = ['id', id];
  
  pool.query(QUERY, data, (err, _results) => {
    if (err) {
      console.log(err);
      res.send('Erro ao remover livro');
    } else {
      res.redirect('/books');
    }
  });
});

  

  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  })


