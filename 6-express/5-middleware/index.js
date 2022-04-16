import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

const PORT = 3000;

const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, _res, next) {

  req.authStatus = false;

  if(req.authStatus) {
    console.log('Está logado, pode continuar!');
    next();
  } else {
    console.log('Não está logado, faça o login para continuar.');
    next()
  }
}

app.use(checkAuth)

app.get('/', (_req, res) => {

res.sendFile(`${basePath}/index.html`)

});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});