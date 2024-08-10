require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const router=require("./Router/router");
const database=require("./Database");
const ErrorMiddleware=require("./Middleware/ErrorMiddleware");
const AdminRouter=require("./Router/AdminRouter");
app.use(express.json());

const corsOptions={
    origin:"http://localhost:3001",
    method:"POST,GET,PUT,DELETE,PATCH",
    credentials:true
}
app.use(cors(corsOptions));

app.use("/api",router)
app.use("/adRouter",AdminRouter)

database();
app.use(ErrorMiddleware);
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server is run on PORT");
})