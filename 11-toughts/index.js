import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import FileStore from 'session-file-store';
import flash from 'express-flash';

import Tought from './models/Tought.js';
import User from './models/User.js';

const app = express();

import conn from './db/conn.js';

const PORT = 3009;

//* Setup do handlebars(template engine)
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

//* Receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
  )

app.use(express.json());

//* Session middleware (onde express vai salvar as seções)
app.use(
  session({
    name:"session",
    secret:"nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: newDate(Date.now() + 360000),
      httpOnly: true
    }
  }),
)

//* Flash messages
app.use(flash())

//* Public path
app.use(express.static('public'));

//* Set session to res
app.use((req, res, next) => {

  if(req.session.userid) {
    res.locals.session = req.session
  }

  next()
})

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


