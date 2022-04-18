import express from 'express';
const router = express.Router();
import path from 'path';
const __dirname = path.resolve();

const basePath = path.join(__dirname, './templates');

router.get('/', (_req, res) => {
  res.sendFile(`${basePath}/index.html`);   
});

router.get('/new', (_req, res) => {
  res.sendFile(`${basePath}/new.html`);
    });

router.get('/:id', (_req, res) => {
  res.sendFile(`${basePath}/project.html`);
});

export default router   