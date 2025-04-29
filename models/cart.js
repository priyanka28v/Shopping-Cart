const mongoose=require('mongoose')
const { Schema,model} = mongoose

const userSchema=new Schema(
    {
        Name:{type:String,required:true},
       Price:{type:Number,required:true},
       Quantity:{type:Number,required:true},
    }
)
const user=model("User",userSchema)
module.exports=user;