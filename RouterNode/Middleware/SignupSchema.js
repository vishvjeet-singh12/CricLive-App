const {z}=require("zod");

const SignupSchema=z.object({
    username:z.
    string({required_error:"Username is required"})
    .trim()
    .min(5,{message:"Username atlest of 7 characters"})
    .max(255,{message:"Max 255 characters"}),
    
    email:z.
    string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(6,{message:"Email have atleast 7 characters"}),

    password:z.
    string({required_error:"Password are Required"})
    .min(3,{message:"Password must be of 6 characters"})
    .max(255,{message:"Max 255 characters"}),

    mobile:z.
    string({required_error:"Mobile Number is required"})
    .min(10,{message:"Mobile No. have atleast 10 numbers"})
    .max(20,{message:"Maxium 20 numbers"})
})

module.exports=SignupSchema;