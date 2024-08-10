 const UserModel=require("../Model/UserModel");
const getAllUser=async(req,res)=>{
    try{
        const users=await UserModel.find().select({
            password:0
        })
        res.json({
            message:"Users",
            users
        })
    }
    catch(error){
        console.log(error);
    }
}

const deleteUserById=async(req,res)=>{
     try {
        const id=req.params.id;
        await UserModel.deleteOne({_id : id});
        res.json({
            message:"Deleted Successfully",
        })
     } catch (error) {
        console.log(error);
     }
}

const getUserEditId=async(req,res)=>{
      try {
          const id=req.params.id;
          const data=await UserModel.findOne({_id:id},{password:0});
          res.json({
            message:"User",
            data
          })
      } catch (error) {
        console.log(error);
      }
}

const upadteUserData=async(req,res)=>{
       try {
         const id=req.params.id;
         const userData= req.body;

         const updatedUserData=await UserModel.updateOne(
            {_id:id},
            {
                $set:userData
            }
         )
         return res.json({
            message:"Succesfully Updated",
            updatedUserData
         })
       } catch (error) {
        console.log(error);
       }
}
module.exports={getAllUser,deleteUserById,getUserEditId,upadteUserData};