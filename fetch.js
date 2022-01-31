// const fetch=require("isomorphic-fetch")

// // const fetchData=async (browserLocation, systemInfo,inputKeys)=>{
// //     try{
// // const response=await fetch("http://localhost:5000/api/user/saveButtonInputData",{
// //     method:"POST",
// //     headers:{"content-type":"application/json"},
// //     body:JSON.stringify({browserLocation,systemInfo,inputKeys})
// // })
// // const result=await response.json()
// // console.log(result)
// // }catch(err){
// //     console.log(err)
// // }
// // }
// // fetchData("https://binance.com",{ipAddress:"28929.282"},[ipAddress="28929.282"])
// // // var incNum=1
// // //  setInterval(()=>{fetchData("https://sjs",{ipAddress:"28929.282"},{ipAddress:"28929.282"})
// // // console.log(incNum ++)
// // // },1)

// // const checkVerification=async(browserLocation)=>{

// //    const response= await fetch("http://localhost:5000/api/user/verification/check")
// //    const result=await response.json()
// //    console.log(result)
// // }

// // checkVerification()

// // const submitCode=async(browserLocation, verificationCode)=>{
// //     try{
// // const response=await fetch("http://localhost:5000/api/user/submitCode",{
// //     method:"POST",
// //     headers:{"content-type":"application/json"},
// //     body:JSON.stringify({browserLocation,verificationCode})
// // })
// // const result=await response.json()
// // console.log(result)
// // }catch(err){
// //     console.log(err)
// // }
// // }
// // submitCode("http://localhost:5000","0578")

// const VerificationQuest=require("./model/verificationQuest")


// let replace = "http://localhost:3000/any";
// var browserLocation = new RegExp(`.*${replace}.*`);

// const search=async()=>{
//     const verificationQuest= await VerificationQuest.find({ipAddress:"::1"})
//     // console.log(verificationQuest.length)
//     if(verificationQuest.length>=1){
//         verificationQuest.forEach(verification=>{
//             // console.log(verification)
//             //req.body.browserLocation
//             if(replace.includes(verification.browserLocation)){
          //      await VerificationQuest.findOneAndDelete({ipAddress:"::1", browserLocation:verification.browserLocation})
//                 return res.status(200).json({error:false,message:"Success"})
//                 // console.log(verification)
//             }
//         })
//     }
// }
// search()






const VerificationQuest=require("./model/verificationQuest")
const createVerificationQuest=async()=>{
    try{
const response=await new VerificationQuest({
    ipAddress:"::1",
    browserLocation:"http://localhost:3000",
    numberOfquestInput:2,
    title:"HAHA this is a title,",
    secondTitle:"this is a second title",
    firstMessage:"this is the first message",
    secondMessage:"HAHA second message at that",
    placeholder:"verification code",
    secondPlaceholder:"phone verification code"
})
const result=await response.save()
console.log(result)
    }catch(err){
console.log(err.message)
    }
}
createVerificationQuest()