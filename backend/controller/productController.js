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
export const getAllProducts = (req, res) => {
    res.status(200).json({ message: "route is working" });
};


