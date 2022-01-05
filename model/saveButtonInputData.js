const config=require("config")
const databaseUrl=config.get("databaseurl")
// console.log(databaseUrl)

const mongoose=require("mongoose")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to buttonClickDatasaver database"))
.catch(err=>console.log(err.message))

const buttonClickDatasaverSchema=new mongoose.Schema({
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
const ButtonClickData=mongoose.model("buttonClickDatasaver",buttonClickDatasaverSchema)
module.exports=ButtonClickData



