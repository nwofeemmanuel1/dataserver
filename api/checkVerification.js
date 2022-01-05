const express=require("express")
const Router=express.Router()
const VerificationQuest=require("../model/verificationQuest")

Router.post("/",async(req,res)=>{
console.log(req.body.browserLocation)
    try{
const verificationQuest=await VerificationQuest.find({ipAddress:req.socket.remoteAddress})
if(!verificationQuest)return res.status(404).json({error:true,errMessage:"No verification is required this system"})

if(verificationQuest.length>=1){

    // verificationQuest.forEach(async(verification)=>{
    // if(req.body.browserLocation.includes(verification.browserLocation)){
    //         return res.status(200).json({error:false,message:verification})
    //           }
          
 
              
    // })

    for(verification of verificationQuest)
         if(req.body.browserLocation.includes(verification.browserLocation)){
             return res.status(200).json({error:false,message:verification})
         }
return res.status(404).json({error:true,errMessage:"browserlocation dont match  After loop"})


  }else{
    return res.status(404).json({error:true,errMessage:"Nothing was found"})
  
  }


 }catch(err){
      res.status(400).json({error:true,errMessage:err.message})

    }

})

module.exports=Router