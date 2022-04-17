import express from 'express';
import routes from './routes/routes.js';

const app = express();

const PORT = 5000;

//* arquivos estáticos:
app.use(express.static('public'));

app.use('/projects', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  
  });