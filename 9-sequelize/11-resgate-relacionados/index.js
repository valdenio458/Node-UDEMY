import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import User from './models/User.js';
import Address from './models/Address.js';

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

const PORT = 3009;

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
  try {
    const user = await User.findOne({include: Address, where: { id } });

    res.render('useredit', { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
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
  
  app.post('/address/create', async (req, res) => {
    const { UserId, street, number, complement, zipcode, city, state, country} = req.body;
    const address = await Address.create({ UserId, street, number, complement, zipcode, city, state, country});
    res.redirect(`/users/edit/${UserId}`);
  });


  conn
  .sync()
  //* .sync({force: true}) //* para forçar a criação do banco de dados
  .then(() => {  //* Cria a tabela User
    app.listen(PORT)      
    })
    .catch(err => {
      console.log(err);
    });
  


