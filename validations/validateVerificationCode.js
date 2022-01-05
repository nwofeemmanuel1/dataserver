const Joi=require("joi")

const validateCode=(req)=>{

const schema=Joi.object({
browserLocation:Joi.string().required(),
verification_code:Joi.string().required()
})

const result=schema.validate({browserLocation:req.browserLocation,verification_code:req.verificationCode})
if(result.error)return result.error.message;
return true

}

module.exports=validateCode