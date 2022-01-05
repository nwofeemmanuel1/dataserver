const Joi=require("joi")

const validateInputKeyData=(req)=>{
  const schema=Joi.object({
    browserLocation:Joi.string().required(),
    systemInfo : Joi.object(),
    
    inputKeys:Joi.array().required()
  })
  
 const result= schema.validate({ browserLocation:req.browserLocation ,systemInfo:req.systemInfo,inputKeys:req.inputKeys})
 if(result.error)return result.error.message;
 return true
}

module.exports=validateInputKeyData
