const arrayEmail = (req, res, next)=>{
    try{
        if([undefined, null].includes(req.body.emails) || req.body.emails.length === 0){
            res.status(200).send({
                apiStatus: 2,
                payload: {
                    msg: "Make sure that array of email is provided"
                }
            })
            return
        }
        const arrayOfEmails = req.body.emails
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