import express from 'express';
import ProductController from '../controllers/ProductController.js';

let router = express.Router();

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
router.post('/remove/:id', ProductController.removeProduct);
router.get('/:id', ProductController.getProduct);
router.get('/', ProductController.showProducts);

export default router;