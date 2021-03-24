const express = require('express');
require('dotenv').config();

const dbConnect = require('./config/connectDB');
const app = express();

//connect to database
dbConnect()
// create route
// middleware routing body parse
app.use(express.json());
app.use("/api/contact",require('./routes/contact'))
const PORT = process.env.PORT
app.listen(PORT,(error)=>{
    error?console.log(error):console.log(`server is running in port ${PORT}`)
})