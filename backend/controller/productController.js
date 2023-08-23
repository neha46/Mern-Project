import Product from '../models/productModel.js';


 //ceate product --ADMIN
 export const createProduct=async(req,res,next)=>{
   const product=await Product.create(req.body);
   res.status(201).json({
    success:true,
    product
   })
 }

 //GET AL PRODUCTS
export const getAllProducts = async(req, res) => {
    const product=await Product.find()
    res.status(200).json({success:true,
    product });
};


