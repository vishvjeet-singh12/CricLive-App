const express=require("express");
const router=express.Router();
const UserMiddelware=require("../Middleware/UserMiddelware");
const AdminMiddleware=require("../Middleware/AdminMiddleware");
const Admin=require("../Controller/AdminController");

router.get("/apAllData",UserMiddelware,AdminMiddleware,Admin.getAllUser);
router.delete("/ad/delete/:id",UserMiddelware,AdminMiddleware,Admin.deleteUserById);
router.get("/ad/user/:id",UserMiddelware,AdminMiddleware,Admin.getUserEditId);
router.patch("/ad/update/:id",UserMiddelware,AdminMiddleware,Admin.upadteUserData);
module.exports=router;