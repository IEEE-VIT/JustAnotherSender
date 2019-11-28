const express = require("express")
const app = express()

//default route for init commit
app.use((req, res, next)=>{
    res.status(200).send({
        apiStatus: 1,
        payload:{
            msg: "Api working"
        }
    })
    return
})




const port = 8080 || process.env.PORT

app.listen(port,()=>{
    console.log("Server started at: " + port)
})