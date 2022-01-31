const Express=require("express")
var cors = require('cors')
const app= Express()
app.use(Express.json())
app.use(cors())
// app.use((req,res,next)=>{console.log("Someone is browsing")
// next()
// })
const saveInputKeyData=require("./api/saveInputKeyData")
app.use("/api/user/saveInputKeyData",saveInputKeyData)

const saveButtonInputData=require("./api/saveButtonInputData")
app.use("/api/user/saveButtonInputData",saveButtonInputData)

const submitCode=require("./api/submitCode")
app.use("/api/user/submitCode",submitCode)

const checkVerification=require("./api/checkVerification")
app.use("/api/user/verification/check", checkVerification)

app.use("/",Express.static("html"))

app.get("/api/download", (req,res)=>{
    const file=`${__dirname}/Fraud-detection-Ai.zip`
    res.download(file)
})

const port=process.env.PORT||5000
app.listen(port,()=>console.log(`running or Port: ${port}`))