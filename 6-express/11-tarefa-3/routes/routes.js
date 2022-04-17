import express from 'express';
const router = express.Router();
import path from 'path';
const __dirname = path.resolve();

const basePath = path.join(__dirname, './templates');

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`); 
});

router.get('/new', (req, res) => {
    res.sendFile(`${basePath}/new.html`);
    });

router.get('/:id', (req, res) => {
  res.sendFile(`${basePath}/project.html`);
});

export default router   