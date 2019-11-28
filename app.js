const express = require("express")
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//importing routes
const route = require("./routes/route.js")

app.use(route)
//default route
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