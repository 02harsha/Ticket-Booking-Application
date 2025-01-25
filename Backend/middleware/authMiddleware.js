

// const jwt = require('jsonwebtoken')
// const authMiddleware=(req,res,next)=>{
//     const token = req.body.headers.authorization.split(' ')[1]
//     if(!token){
//         res.send({msg:'Please Login'})
//     }
//     jwt.verify(token,'secret',(decoded,er)=>{
//         if(decoded){
//             next()
//         }
//         else{
//             res.send({msg:"Please Login"}).status(401)
//         }
//     })
// }
// module.exports={
//     authMiddleware
// }