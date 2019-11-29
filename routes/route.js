const app = require("express")()
const arrayEmail = require("../middlewares/arrayEmail")
const emailHandler = require("../controllers/emailHandler")

app.post("/sendEmails", arrayEmail, (req, res)=>{
    emailHandler.arrayEmailSender(req.emails, req.body.html)
        .then( resp => res.status(200).send(resp))
        .catch( err => res.status(500).send(err))
})

module.exports = app