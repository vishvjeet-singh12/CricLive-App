const mongoose=require("mongoose");

const URI=process.env.MONGODB_URI;
const database=()=>{
    mongoose.connect(URI).then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports=database;