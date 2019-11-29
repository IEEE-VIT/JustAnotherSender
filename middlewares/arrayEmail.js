const emailHandler = require("../controllers/emailHandler")

const arrayEmail = async (req, res, next)=>{
    try{
        if([undefined, null].includes(req.body)){
            res.status(200).send({
                apiStatus: 2,
                payload: {
                    msg: "Make sure that array of email is provided"
                }
            })
            return
        }
        const jsonData = req.body
        const arrayOfEmails =  await emailHandler.extractEmails(jsonData, "email")
        req.emails = arrayOfEmails
        req.noOfEmails = arrayEmail.length
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