import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import Task from './models/Task.js';
import tasksRoutes from './routes/tasksRoutes.js';

const app = express();

// const conn = require('./db/conn');

const PORT = 3009;

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

app.use('/tasks', tasksRoutes);

conn
.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  } );
})
.catch(err => {
  console.log(err);
} );
