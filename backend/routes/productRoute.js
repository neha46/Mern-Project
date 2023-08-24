import express from 'express'

import { getAllProducts,createProduct,updateProduct,deleteProduct,getOneProduct} from '../controller/productController.js';
 const  router=express.Router();


router.post('/product/create',createProduct)
router.get('/product/all',getAllProducts)
router.put('/product/update/:id',updateProduct)
router.delete('/product/delete/:id',deleteProduct)
router.get('/product/:id',getOneProduct)

  export  default router;