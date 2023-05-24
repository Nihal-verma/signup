const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/signUproute")
const app = express()
const port = 6000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb://127.0.0.1:27017/SignUp",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("db connect");}).catch(()=>{console.log("error in connection");})
app.use(routes)
app.listen(port,()=>{console.log(`server is running on port no. ${port}`);})
