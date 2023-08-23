import express from 'express'

import { getAllProducts,createProduct } from '../controller/productController.js';
 const  router=express.Router();


router.post('/product/create',createProduct)
router.get('/product',getAllProducts)

  export  default router;