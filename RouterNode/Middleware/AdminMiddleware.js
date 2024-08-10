const AdminMiddleware=async(req,res,next)=>{
    try {
        const isAdmin=req.user.isAdmin;
         if(!isAdmin){
            res.json({
                message:"Inavlid Access,You are not admin"
            })
         }
         next();
    } catch (error) {
        console.log(error);
    }
}
module.exports=AdminMiddleware;