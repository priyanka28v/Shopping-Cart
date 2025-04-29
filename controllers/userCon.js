const mongoose=require('mongoose')
const express=require('express')
const user=require('../models/user')

exports.GetHomePage=async(req,res)=>{
    res.render('home')
}

exports.GetLoginPage=async(req,res)=>{
    res.render('login')
}

exports.GetSignupPage=async(req,res)=>{
    res.render('signup')
}

exports.PostLoginData=async(req,res)=>{
    try{
    const{username,email,password}=req.body
    console.log(req.body)
    const userExist=await user.findOne({username,email})
    if(userExist){
        return res.status(404).json({success:true,message:'welcome to shopingCart'})
        //res.status(400).send({message:'User already exist'})
        }
        else{
    return res.status(400).json({success:false,message:'please signup first'})
    }
}catch(err){
    console.log(err)
    return res.status(404).send({message:'error in the controller'})
}
}
exports.PostSignupData=async(req,res)=>{
    try{
        const{username,email,password}=req.body
        //console.log("Content-Type:", req.headers['content-type']);

        console.log(req.body)
        const userExist=await user.findOne({email})
        if(userExist){
          return  res.json({success:false,message:'user already exits!!'})
         //res.redirect("/signup")

            }
            else{
                const User=new user ({
                    username,email,password
                    })
                    await User.save()
                    return res.json({success:true,message:'user save successfully,login  here!!'})
                    }
                }
                    catch(err){
                console.log(err)
                return res.status(404).send({message:'error in the controller'})
}
}