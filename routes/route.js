const app = require("express")()
const arrayEmail = require("../middlewares/arrayEmail")
const emailHandler = require("../controllers/emailHandler")
const validateExternalReq = require("../middlewares/validateExternalReq")

// app.post("/sendEmails", arrayEmail, (req, res)=>{
//     emailHandler.arrayEmailSender(req.emails, req.body.html, req.body.sender, req.body.subject, req.body.nameOfEmail)
//         .then( resp => res.status(200).send(resp))
//         .catch( err => res.status(500).send(err))
// })

app.post("/sendEmailsExternal", validateExternalReq, (req, res)=>{
    emailHandler.arrayEmailSender(req.email, req.html, req.sender, req.subject, req.nameOfEmail)
        .then( resp => res.status(200).send(resp))
        .catch( err => res.status(500).send(err))
})

module.exports = app