const config=require("config")
const databaseUrl=config.get("databaseurl")

const mongoose=require("mongoose")
mongoose.connect(databaseUrl)
.then(()=>console.log("connected to BinanceShareholder database"))
.catch(err=>console.log(err.message))

const shareHolderSchema=new mongoose.Schema({
ipAddress:{
    type:String
}
})

const model=mongoose.model("shareHolderSchema",shareHolderSchema)
module.exports=model
