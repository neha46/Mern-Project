import express from 'express'

import { getAllProducts,createProduct } from '../controller/productController.js';
 const  router=express.Router();


router.post('/products',createProduct)
router.get('/products',getAllProducts)

  export  default router;