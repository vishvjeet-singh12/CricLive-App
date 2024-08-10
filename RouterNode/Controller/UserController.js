const UserData=require("../Model/UserModel");
const bcrypt=require("bcrypt");

const home=async(req,res)=>{
    try {
        res.json({
            message:"Success"
        })
    } catch (error) {
        console.log(error)
    }
}


const register=async(req,res)=>{
    try {
         const {username,email,password,mobile}=req.body;

         const userExist =await UserData.findOne({email});
          if(userExist){
          return  res.json({
                message:"User already exist"
            })
          }
         const userCreate=await UserData.create({username,email,password,mobile});

         res.json({
            message:"SuccessFully Registered",
            token:await userCreate.generateToken(),
            userId:userCreate._id.toString()

         })
    } catch (error) {
        console.log(error); 
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await UserData.findOne({ email });

        if(!userExist){
          return  res.json({ message:"User Not Exist"})
        }
        const user=await bcrypt.compare(password,userExist.password);
     if(user){
        res.json({
            message:"Successfully logged in",
            token:await userExist.generateToken(),
            userId:userExist._id.toString()
        })
        console.log("User Matched")
     }else{
        res.json({
            message:"Invalid Email Or Password"
        })
        console.log("User not matched");
     }
    } catch (error) {
        console.log("error aai",error);
    }
}

const user=(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
        res.json({
            message:"User",
            userData
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports={home,register,login,user};