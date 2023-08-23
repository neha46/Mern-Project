import Product from '../models/productModel.js';


 //ceate product 
 export const createProduct=async(req,res,next)=>{
   const product=await Product.create(req.body);
   res.status(201).json({
    success:true,
    product
   })
 }
export const getAllProducts = (req, res) => {
    res.status(200).json({ message: "route is working" });
};


