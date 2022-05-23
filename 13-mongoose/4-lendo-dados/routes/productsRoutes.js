import express from 'express';
import ProductController from '../controllers/ProductController.js';

let router = express.Router();

//router.get('/:id', ProductController.getProduct);
//router.post('/remove/:id', ProductController.removeProduct);
//router.get('/edit/:id', ProductController.editProduct);
//router.post('/edit', ProductController.editProductPost);
router.get('/', ProductController.showProducts);
router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);

export default router;