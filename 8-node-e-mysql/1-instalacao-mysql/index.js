import express from 'express';
import mysql from 'mysql';

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/views/index.html');
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
  console.log('Connected!');
}),

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  })


