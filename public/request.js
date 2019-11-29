document.getElementById("request").addEventListener("click", ()=>{
    const htmlVar = document.getElementById("html").value
    const emailsVar = document.getElementById("emails").value
    const secretVar = document.getElementById("secret").value
    console.log(typeof(emailsVar))
    const arrayOfEmails = emailsVar.split(",").trim()
    console.log(arrayOfEmails)
    fetch("/sendEmails", {
        method: 'post',
        body: JSON.stringify({
            emails: arrayOfEmails,
            html: htmlVar,
            secret: secretVar
        })
    })
    .then(async (resp)=>{
        const tmp = await resp.json()
        if(tmp.apiStatus === 1){
            document.getElementById("status").innerText = JSON.stringify(tmp)
        } else if(tmp.apiStatus === 2){
            alert(tmp.payload.msg)
            document.getElementById("status").innerText = JSON.stringify(tmp)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})