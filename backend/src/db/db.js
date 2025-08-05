const mongoose = require("mongoose")

const connect = ()=>{
    mongooseonnect("mongodb+srv://ashwinsinghal2004:M57s4tqIV1aAnCjc@cluster0.zaf1wqb.mongodb.net/VIPS")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect
