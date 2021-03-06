const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const path = require("path")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


//importing routes
const route = require("./routes/route.js")

app.use(route)

app.use((req, res, next)=>{
    res.status(200).send({
        apiStatus:6,
        apiMsg: "API working",
    })
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("Server started at: " + port)
})