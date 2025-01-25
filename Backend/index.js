const express = require('express')
const { connection } = require('./database/connection')
const { userRoutes } = require('./routes/userRoutes')
const { authMiddleware } = require('./middleware/authMiddleware')
const app = express()
var cors=require('cors')
const { movieRouter } = require('./routes/moviesroutes')
const {  paymentRouter } = require('./routes/PaymentRoute')
require('dotenv').config()
const port= process.env.PORT

app.use(cors())
app.use(express.json())


app.use('/u',userRoutes)
app.use(movieRouter)
app.use(paymentRouter)
// app.use(authMiddleware)

app.listen(port,async()=>{
    await connection
    console.log('connection established')
    console.log('listening on port',port)
})


