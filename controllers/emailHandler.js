const awsSes = require("./awsSes")

const arrayEmailSender = (email, html, sender, subject, nameOfEmail)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            email.forEach((oneEmail)=>{
                awsSes.awsMailer([oneEmail], html, sender, subject, nameOfEmail)
            })
            resolve({
                apiStatus: 1,
                apiMsg: "Request Accepted",
                payload: {
                    msg: "Emails are Being Sent",
                }
            })
        } catch(err){
            reject({
                apiStatus: 5,
                apiMsg: "Request Rejected",
                payload: {
                    msg: "Service Not currently available!",
                    errorMsg: err.message
                }
            })
        }
    })
}

module.exports = {
    arrayEmailSender,
    extractEmails
}
