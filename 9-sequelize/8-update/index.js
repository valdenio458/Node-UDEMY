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

app.get('/users/create', (_req, res) => {
  res.render('adduser');
});

app.post('/users/create', async (req, res) => {
  const { name, occupation} = req.body;
  let { newsletter } = req.body;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(req.body);

  const user = await User.create({ name, occupation, newsletter });  
  res.redirect('/');
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({raw: true, where: { id } });

  res.render('userview', { user });
});

app.post('/users/delete/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.redirect('/');
});

app.get('/users/edit/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ raw: true, where: { id } });
  res.render('useredit', { user });
});

app.post('/users/update', async (req, res) => {
  const { id } = req.body;
  const { name, occupation} = req.body;
  let { newsletter } = req.body;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.update({ name, occupation, newsletter }, { where: { id } });
  res.redirect('/');
});



app.get('/',async (_req, res) => {

  const users = await User.findAll({raw: true});

  console.log(users);

  res.render('home', { users });
  });
  
  conn
  .sync()
  .then(() => {  //* Cria a tabela User
    app.listen(PORT)      
    })
    .catch(err => {
      console.log(err);
    });
  


