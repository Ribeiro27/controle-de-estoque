import express from 'express';
import productController from '../controllers/productController.js';   

const router = express.Router();

router.get('/products', productController.all);
router.get('/products/:id', productController.show );
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id',productController.delete);


export default router;