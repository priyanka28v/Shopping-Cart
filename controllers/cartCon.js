const mongoose=require('mongoose')
const express=require('express')
const user=require('../models/cart')

exports.GetCartPage=async(req,res)=>{
    res.render('cart')
}
exports.PostItems=async(req,res)=>{
    console.log(req.body)
    try{
        const {Name, Price, Quantity } = req.body
        const name=await user.findOne({Name:Name});
        if(name){
           const updatedUser= await user.updateOne({Name:Name},{$inc:{
                    Quantity:Quantity }})
                return res.status(400).json({message:'Item already exists,quantity is increased',
                    data: updatedUser
                })
        }
        else{
        const {Name,Price,Quantity}=req.body
       const items=new user({
        Name,Price,Quantity
       })
       await items.save()
       res.json({message:"items are saved"})
    }

}catch(err){
    console.log(err)
}
}
exports.GetItems=async(req,res)=>{
    try{
        const {userId}=req.body

        const id=await user.findOne({userId})
        const foundItems=await user.find()

        if(!foundItems){
            return res.status(400).json({message:'No items found'})
        }
        else if(!id){
            return res.status(404).json({message:"item having this userId is not found"})
        }
        else{
            res.json(id)
}
    }
    catch(err){
        console.log(err)
        return res.status(404).json({message:"error in code"})
    }
}

// exports.DeleteItems=async(req,res)=>{
//     try{
//         const 
// }