  ///for verify jsonweb token 
  ///aur ye jisne bhi login kiya uska pura data dikha dega
   ///frontend me authenticatin wala hai
 
const UserModel=require("../Model/UserModel");
const jwt=require("jsonwebtoken");
const UserMiddelware=async(req,res,next)=>{
    const token= req.header("Authorization");
    console.log(token);
    
    if(!token){
       return res.json({
            mssg:"Token is not provided"
        })
    }
    const jwtWebToken=token.replace("Bearer ","").trim();
     try {
        const isVerified= jwt.verify(jwtWebToken ,process.env.JWT_SECRET_KEY1);
        const userData=await UserModel.findOne({email:isVerified.email}).select({
            password:0,
        })
        console.log(userData);
        
        req.user=userData;
        req.token=token;
        req.userId=userData._id

        next();
        
     } catch (error) {
       console.log(error)  
     }
}
module.exports=UserMiddelware;