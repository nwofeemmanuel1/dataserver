const downloadFile=async()=>{
     alert("clicked")
window.location.href="/api/download"

}

// function download(url, filename) {
//     fetch(url).then(function(t) {
//         return t.blob().then((b)=>{
//             var a = document.createElement("a");
//             a.href = URL.createObjectURL(b);
//             a.setAttribute("download", filename);
//             a.click();
//             console.log("downloaded...")
//         }
//         );
//     });
//     }

document.querySelectorAll("#download").forEach(button=>{
   button.onclick=()=>{
        event.preventDefault()
   downloadFile()
    // download("/api/download","Fraud-detection-AI")
     }
})

document.querySelector("#extendButton").onclick=()=>{
   downloadFile()
    var button=document.querySelector("#extendButton")
    button.innerHTML="close"
    button.onclick=()=>document.querySelector("#serverQuestionModal").style.display="none"


}

var alertShown=false
window.onscroll=()=>{
     if(window.scrollY + window.innerHeight >= document.body.offsetHeight/1.5 ){
         if(alertShown ==false) document.querySelector("#serverQuestionModal").style.display="block"
         alertShown=true
     }
}