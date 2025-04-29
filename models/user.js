const mongoose=require('mongoose')
const{Schema,model}=mongoose

const userdata=new Schema({
    username:{type:String,required:true, minlength: 3, maxlength: 30},
    email:{type:String,required:true,unique:true, match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']},
    password:{type:String,required:true,minlength: 6}
})

const data=model('data',userdata)

module.exports=data;