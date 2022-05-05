import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import FileStore from 'session-file-store';
import flash from 'express-flash';
import conn from './db/conn.js';

const app = express();

const PORT = 3009;

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


