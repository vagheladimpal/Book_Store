const express=require("express")
const router=express.Router()
const {handleUserSignup,handleUserLogin,handleUserPassword}=require("../controllers/user")
router.post("/",handleUserSignup)
router.post("/login",handleUserLogin)
router.post("/forgetPassword",handleUserPassword)
module.exports=router;