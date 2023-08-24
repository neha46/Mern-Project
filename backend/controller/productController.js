import Product from '../models/productModel.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAsyncError.js'


 //ceate product --ADMIN
 export const createProduct=catchAsyncError(async(req,res,next)=>{
   const product=await Product.create(req.body);
   res.status(201).json({
    success:true,
    product
   })
 })

 //GET all PRODUCTS
export const getAllProducts = catchAsyncError(async(req, res) => {
    const product=await Product.find()
    res.status(200).json({success:true,
    product });
});
 
// update all products-- admin
 export  const updateProduct=catchAsyncError(async(req,res)=>{
let product= await Product.findById(req.params.id)
if(!product){return next(new ErrorHandler(" This product not found",404))}
product=await Product.findByIdAndUpdate(req.params.id,req.body,{
  new:true,
  runValidators:true,
  findByIdAndUpdate:false
})
res.status(200).json({
  success:true,
  product
})
 });


 //get single product details-------------------
 export const getOneProduct=catchAsyncError(async(req,res,next)=>{
  const product=await Product.findById(req.params.id);
  if(!product){return next(new ErrorHandler(" This product not found",404))}
      res.status(200).json({success:true,
        product });
 })


 // delete product---------
 export  const deleteProduct=catchAsyncError(async(req,res,next)=>{
  const id = req.params.id
  const  product= await Product.findOneAndDelete(id)
  if(!product){return next(new ErrorHandler(" This product not found",404))}
 return res.status(200).json({
    success:true,
    message:"product deleted sucessfully"
  })
 })