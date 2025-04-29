const mongoose=require('mongoose')
const express=require('express')
const cartRoutes=require('./routes/cart')
const userRoutes=require('./routes/user')
const models=require('./models/index')
const cartCon=require('./controllers/cartCon')
const userCon=require('./controllers/userCon')
const connection=require('./config/db')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs'); 

app.use('/cart',cartRoutes)
app.use('/',userRoutes)

connection()

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})





