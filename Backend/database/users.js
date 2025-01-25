const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    phone_number:{
        type:String
    },
    mail_id:{
        type:String
    }
})


const userRegisterSchema= mongoose.model('users',RegisterSchema)
module.exports={
    userRegisterSchema
}



