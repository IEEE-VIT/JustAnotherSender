document.getElementById("request").addEventListener("click", ()=>{
    const htmlVar = document.getElementById("html")
    const complexJson = document.getElementById("complexJson")
    const secretVar = document.getElementById("secret")
    const data = JSON.stringify({
        json: complexJson.value,
        html: htmlVar.value,
        secret: secretVar.value
    })
    console.log(data)
    fetch("/sendEmails", {
        method: 'post',
        body: data
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