const express = require('express')
const userRoutes=express.Router()
const {userRegisterSchema} = require('../database/users')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
userRoutes.post('/login',async(req,res)=>{
    const {username,password}=req.body
    const isUser=await userRegisterSchema.findOne({username:username})
    if(!isUser){
        res.send({msg:'invalid credentials',token:undefined}).status(401)
    }else{
        const isPassword=await bcrypt.compare(password,isUser.password)
        const payload = {_id:isUser._id,username:isUser.username}
        if(isPassword){
            jwt.sign(payload,'secret',(err,token)=>{
                
                if(err){
                    res.send('error while generating token').status(500)
                }
                res.send({user:isUser,token:token})
            })
        }
        else{
            res.send({msg:'invalid credentials',token:undefined}).status(401)
        }

    }
    

})

userRoutes.post('/register',async(req,res)=>{
    const {username,password}=req.body
    const isUser=await userRegisterSchema.findOne({username:username})
    if(isUser){
        res.send({msg:'User Exists',status:false}).status(409)
    }else{
        try{
            const hashedPassword=await bcrypt.hash(password,5)
            const newUser= new userRegisterSchema({...req.body,password:hashedPassword})
            await newUser.save()
            res.send({msg:'User Created',status:true})
        }catch(er){
            console.log("Error while creating user",er)
            res.send({msg:'Error while creating user',status:false}).status(400)
        }
    }
})

module.exports={
    userRoutes
}