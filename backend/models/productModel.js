// making product api's

// creating product model

import  mongoose from "mongoose";
 const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the product name"],
        trim:true
    },
    description:{

        type:String,
        required:[true,"please enter the product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter the product price"],
        maxlength : [8,"price can npot be exceed 8 character"],

    },
    rating:{
        
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,required:true
        },
        URL:{
            type:String,required: true
        }
    }
    ],
    category:{
        type:String,
        required:[true,"please enter the product category"]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxlength:[4,"stock cannot exceed 4 character"],
        default:1
    },
    numberOfReviews:{
        type:Number,default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true

            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true 

            }
            }],
            createdAt:{
                type:Date,
                default:Date.now
            }
    
})
const Product = mongoose.model('Product', ProductSchema);

export default Product;

