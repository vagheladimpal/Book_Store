const User=require("../models/user")
const express=require("express")
const {v4: uuidv4}=require("uuid")
const {setUser}=require("../service/auth")
async function handleUserSignup(req,res) {
    const{name,email,password} =req.body
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/")
}
async function handleUserLogin(req,res) {
    const{email,password} =req.body
    const user=await User.findOne({email})
    if(!user)
        return res.render(("login"),{
            erroe:"invalid username or password"
    })
    
    const sessionId=uuidv4()
    setUser(sessionId,user)
    res.cookie("uid",sessionId)
    
    return res.redirect("/")
    
}
async function handleUserPassword(req,res)
{
    const {email,newPassword,confirmPassword}=req.body;
    console.log(req.body)
    const userdata=await User.findOne({email});
    if(!userdata) return res.status(404).json({message:"user not found"})
    if(newPassword!=confirmPassword)
    {
        return res.status(404).json({message:"password do not match"})
    }
    await User.updateOne({ email },{$set:{password:newPassword}})
    try
    {
        
        res.status(200).json({message:"password updeted successfully"})
    }
    catch(err)
    {
        res.status(500).json({message:"not updeted"})
    }

}
module.exports={
    handleUserSignup,
    handleUserLogin,
    handleUserPassword,
}