import express from 'express';
const router = express.Router();
import path from 'path';
const __dirname = path.resolve();

const basePath = path.join(__dirname, './templates');

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)
  const { name, age } = req.body;
  res.sendFile(`${basePath}/userform.html`);

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos de idade`);

})
router.get('/:id', (req, res) => {
  const { id }= req.params;

  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`)  
})

export default router

