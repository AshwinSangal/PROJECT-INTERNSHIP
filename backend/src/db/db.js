const mongoose = require("mongoose")

const connect = ()=>{
    mongooseonnect("mongodb+srv://ashwinsinghal2004:4HGXBVK3Ojzey6bl@cluster0.r0rvsbh.mongodb.net/VIPS")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect