import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql';

const app = express();

//* Setup do handlebars:
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.sendFile('home');
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


