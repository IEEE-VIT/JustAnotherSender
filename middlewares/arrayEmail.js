const emailHandler = require("../controllers/emailHandler")

const arrayEmail = async (req, res, next)=>{
    try{
        if([undefined, null].includes(req.body.json) || [undefined, null].includes(req.body.html) || req.body.secret !== process.env.SECRET){
            res.status(200).send({
                apiStatus: 2,
                payload: {
                    msg: "Make sure that array of email is provided"
                }
            })
            return
        }
        const jsonData = req.body.json
        const arrayOfEmails =  await emailHandler.extractEmails(jsonData, "email")
        req.emails = arrayOfEmails
        next()
    } catch(err){
        console.log(err.message)
        res.status(500).send({
            apiStatus: 500,
            payload: {
                msg: "Sorry The Service Is down, Come back later"
            }
        })
    }
}

module.exports = arrayEmail