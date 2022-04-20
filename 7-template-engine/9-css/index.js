import express from 'express';
import exphbs from 'express-handlebars';

const app = express();

const PORT = 3000;

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});


//* Setup do handlebars:
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (_req, res) => {

    const frutas = [ 'Banana', 'Maçã', 'Melancia' ];


  res.render('dashboard', { frutas });
});

app.get('/post', (_req, res) => {
   const post = {
        titulo: 'Título do post',
        conteudo: 'Conteúdo do post',
        autor: 'Autor do post',
        data: '01/01/2020'
   }
   res.render('blogpost', { post })
});

app.get('/blog', (_req, res) => {
    const posts = [
        {
            title: 'Aprender JavaScript',
            category: 'JavaScript',
            body: 'Teste',
        },
        {
          title: 'Aprender React',
          category: 'React',
          body: 'Teste',
      },  
      {
        title: 'Aprender Node.js',
        category: 'Node',
        body: 'Teste',
    }, 
  ]          
  
  res.render('blog', { posts })
  })

app.get('/', (_req, res) => {

  const user = {
    name: 'Diego',
    age: '23',
  };
  
  const time = 'Flamengo';

  const auth = false;

  const approved = true;

  res.render('home', { user , time , auth , approved });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}
);

