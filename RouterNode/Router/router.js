const express=require("express");
const router=express.Router();
const controller=require("../Controller/UserController");
const Middleware=require("../Middleware/UserMiddelware");
const Validator=require("../Middleware/Validator");
const SignupSchema=require("../Middleware/SignupSchema");

router.get("/home",controller.home);
router.post("/register",Validator(SignupSchema),controller.register);
router.post("/login",controller.login);
router.get("/user",Middleware,controller.user);
module.exports=router;