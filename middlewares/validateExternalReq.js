const validateExternalReq = (req, res, next)=>{
    try{
        console.log(req.body)
        const email = req.body.email
        const html = req.body.html
        const sender = req.body.sender
        const subject = req.body.subject
        const nameOfEmail = req.body.nameOfEmail

        if(req.body.secret !== process.env.SECRET){
            res.status(200).send({
                apiStatus: 5,
                apiMsg: "Improper Request",
                payload: {
                    msg: "Make sure you make the right request"
                }
            })
            return
        } else {
            //check if the request has all the components
            if([email, html, sender, subject, nameOfEmail].includes(undefined) || !(email instanceof Array)){
                res.status(200).send({
                    apiStatus: 5,
                    apiMsg: "Invalid Request Body",
                    payload: {
                        msg: "Make sure the request body is set properly"
                    }
                })
                return
            }
            req.email = email
            req.html = html
            req.sender = sender
            req.subject = subject
            req.nameOfEmail = nameOfEmail
            next()
        }

    } catch (err){
        console.log(err.message)
        res.status(500).send({
            apiStatus: 500,
            payload: {
                msg: "Sorry The Service Is down, Come back later"
            }
        })
    }
}

module.exports = validateExternalReq