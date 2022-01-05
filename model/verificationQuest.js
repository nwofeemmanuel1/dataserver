const config=require("config")
const databaseurl=config.get("databaseurl")
const mongoose=require("mongoose")
mongoose.connect(databaseurl)
.then(()=>console.log("connected to verificationQuestion database"))
.catch(err=>console.log(err.message))

const verificationQuestSchema=new mongoose.Schema({

    ipAddress:{
        type:String,
        required:true,
    },
    browserLocation:{
        type:String,
        required:true
    },
    numberOfquestInput:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    secondTitle:String,
    
    firstMessage:{
        type:String,
        required:true
    },
    secondMessage:String,
    placeholder:{
        type:String,
        required:true
    },
    secondPlaceholder:String,

})

const VerificationQuest=mongoose.model("VerificationQuest",verificationQuestSchema)
module.exports=VerificationQuest