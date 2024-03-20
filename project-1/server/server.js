const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/connectDB');
const corsOption = require('./config/corsOption');
const { default: mongoose } = require('mongoose');
const MemberRoutes = require('./routes/MemberRoutes');

const app = express();


const PORT = process.env.PORT || 7001

connectDB()

app.use(cors(corsOption))
app.use(express.json())
app.use(express.static("public"))

app.use('/api/members',MemberRoutes)



mongoose.connection.once('open',()=>{
    console.log("connected to DB successfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
})

mongoose.connection.on('error',(err)=>{
    console.log("error conection to DB ",err)
})
