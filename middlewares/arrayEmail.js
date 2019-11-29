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
        if([undefined, null].includes(req.body.html) || req.body.emails.html === 0){
            res.status(200).send({
                apiStatus: 2,
                payload: {
                    msg: "Make sure that html code is provided"
                }
            })
            return
        }
        if(req.body.secret !== process.env.SECRET){
            res.status(400).send({
                apiStatus: 2,
                payload: {
                    msg: "Hmm, looks like you have no access to the service"
                }
            })
            return
        }
        const html = req.body.html
        const arrayOfEmails = req.body.emails
        req.emails = arrayOfEmails
        req.html = html
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