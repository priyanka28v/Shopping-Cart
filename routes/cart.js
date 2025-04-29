const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const cartCon=require('../controllers/cartCon')

router.get('/cart',cartCon.GetCartPage)
router.post('/',cartCon.PostItems)
router.get('/:userId',cartCon.GetItems)
//router.delete('/:userId/:itemId',cartCon.DeleteItems)

module.exports=router;