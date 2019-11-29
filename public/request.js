const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
document.getElementById("request").addEventListener("click", ()=>{
    const htmlVar = document.getElementById("html").value
    const senderEmail = document.getElementById("senderEmail").value
    const complexJson = document.getElementById("complexJson").value
    const secretVar = document.getElementById("secret").value
    if(htmlVar === "" || complexJson === "" || secretVar === "" || senderEmail === ""){
        alert("No field can be empty")
        return
    }
    console.log(!senderEmail.match(emailRegEx))
    if(!senderEmail.match(emailRegEx)){
        alert("Sorry that is not a valid sender email id")
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
        json,
        html: htmlVar,
        secret: secretVar
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
        if(tmp.apiStatus === 1){
            alert(tmp.payload.msg)
            document.getElementById("extractedEmails").innerText = JSON.stringify(tmp.payload.emailsExtracted)
        } else if(tmp.apiStatus === 2){
            alert(tmp.payload.msg)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})