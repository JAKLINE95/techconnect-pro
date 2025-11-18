import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

export default router;
