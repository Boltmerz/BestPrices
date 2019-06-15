const mongoose = require('mongoose');
const mongo = require("./globals/mongoDB");
const express = require("express");
const app = express();
const router = require("./routes");
mongoose.connect(mongo.dbConnectionString, { useNewUrlParser: true });
app.use("/healtcheck",(req,res)=>{res.send("App is up!!!")})
app.use("/",router);

app.listen(3000,()=>{
    console.log("Server has started!");
})
