const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect("mongodb+srv://ashwinsinghal2004:4HGXBVK3Ojzey6bl@cluster0.r0rvsbh.mongodb.net/VIPS")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect
