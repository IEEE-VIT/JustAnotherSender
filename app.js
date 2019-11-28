const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const path = require("path")

app.use(express.static('public'))
app.set('views', path.join(__dirname, '/template'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//importing routes
const route = require("./routes/route.js")

app.use(route)
//default route
app.use((req, res, next)=>{
    res.render("index.hbs")
})

const port = 8080 || process.env.PORT

app.listen(port,()=>{
    console.log("Server started at: " + port)
})