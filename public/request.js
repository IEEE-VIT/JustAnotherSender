document.getElementById("request").addEventListener("click", ()=>{
    const htmlVar = document.getElementById("html").value
    const complexJson = document.getElementById("complexJson").value
    const secretVar = document.getElementById("secret").value
    if(htmlVar === "" || complexJson === "" || secretVar === ""){
        alert("No field can be empty")
        return
    }
    try{
        json = JSON.parse(complexJson)
    } catch(err){
        alert("That doesn't look like a valid JSON")
        return
    }
    const data = {
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