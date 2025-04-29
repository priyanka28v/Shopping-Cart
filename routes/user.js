const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const userCon=require('../controllers/userCon')


router.get('/',userCon.GetHomePage)
router.get('/login',userCon.GetLoginPage)
router.get('/signup',userCon.GetSignupPage)

router.post('/login',userCon.PostLoginData)
router.post('/signup',userCon.PostSignupData)


module.exports=router;