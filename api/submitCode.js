const express=require("express")
const Router=express.Router()
const validateCode=require("../validations/validateVerificationCode")
const Code=require("../model/verificationCode")
const VerificationQuest=require("../model/verificationQuest")
Router.post("/",async(req,res)=>{
const isvalid=validateCode(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})

try{

  const response=  await new Code({
        ipAddress:req.socket.remoteAddress,
        browserLocation:req.body.browserLocation,
        verificationCode:req.body.verificationCode
    })
   const result= await response.save()
 const verificationQuest= await VerificationQuest.find({ipAddress:req.socket.remoteAddress})

 if(verificationQuest.length>=1){

  // verificationQuest.forEach(async(verification)=>{
  //     // console.log(verification)
  //     //req.body.browserLocation
  //     if(req.body.browserLocation.includes(verification.browserLocation)){
  //         await VerificationQuest.findOneAndDelete({ipAddress:"::1", browserLocation:verification.browserLocation})
  //         return res.status(200).json({error:false,message:"Success"})
  //         // console.log(verification)
  //     }else{
  //       return res.status(404).json({error:true,errMessage:"browserlocation dont match"})
  //     }
  // })

  for(verification of verificationQuest)
       if(req.body.browserLocation.includes(verification.browserLocation)){
            await VerificationQuest.findOneAndDelete({ipAddress:"::1", browserLocation:verification.browserLocation})
            return res.status(200).json({error:false,message:"Success"})
            // console.log(verification)
        }
 return res.status(404).json({error:true,errMessage:"browserlocation dont match Afer loop"})       

}else{
  return res.status(404).json({error:true,errMessage:"Nothing was found in the database"})

}

}catch(err){
res.status(400).json({error:true,errMessage:err.message})
}

})

module.exports=Router
