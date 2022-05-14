import express from 'express';
import ProductController from '../controllers/ProductController.js';

let router = express.Router();

router.get('/', ProductController.showProducts);

export default router;