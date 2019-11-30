const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
document.getElementById("request").addEventListener("click", ()=>{
    const htmlVar = document.getElementById("html").value
    const senderEmail = document.getElementById("senderEmail").value
    const complexJson = document.getElementById("complexJson").value
    const subject = document.getElementById("subject").value
    const secretVar = document.getElementById("secret").value
    const nameOfEmail = document.getElementById("nameOfEmail").value
    if(htmlVar === "" || complexJson === "" || secretVar === "" || senderEmail === "" || subject === "" || nameOfEmail === ""){
        alert("No field can be empty")
        return
    }
    if(!senderEmail.match(emailRegEx)){
        alert("Sorry that is not a valid sender email id")
        return
    }
    if(subject.length<6 || subject.length>100){
        alert("Make sure subject has at least 5 to max 100 characters")
        return
    }
    try{
        json = JSON.parse(complexJson)
    } catch(err){
        alert("That doesn't look like a valid JSON")
        return
    }
    const data = {
        sender: senderEmail,
        subject,
        json,
        html: htmlVar,
        secret: secretVar,
        nameOfEmail,
    }
    console.log(data)
    fetch("/sendEmails", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(async (resp)=>{
        const tmp = await resp.json()
        console.log(tmp)
        if(tmp.apiStatus === 1){
            alert(tmp.payload.msg)
            document.getElementById("extractedEmails").innerText = JSON.stringify(tmp.payload.emailsExtracted)
        } else if(tmp.apiStatus === 2){
            alert(tmp.payload.msg)
        } else if(tmp.apiStatus === 5){
            alert(tmp.payload.msg + ". " + tmp.payload.errorMsg)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})