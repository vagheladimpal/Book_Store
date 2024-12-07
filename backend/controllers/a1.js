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
