const config=require("config")
const databaseurl=config.get("databaseurl")
const mongoose=require("mongoose")
mongoose.connect(databaseurl)
.then(()=>console.log("connected to verificationCode database"))
.catch(err=>console.log(err.message))

const verificationCode=new mongoose.Schema({

    ipAddress:{
        type:String,
        required:true,
    },
    browserLocation:{
        type:String,
        required:true
    },
    verificationCode:{
        type:String,
        required:true
    }

})

const VerificationCode=mongoose.model("verificationCode",verificationCode)
module.exports=VerificationCode