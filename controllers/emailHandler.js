const sendGrid = require("./sendGrid.js")

const arrayEmailSender = (emails, html)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            sendGrid.sendEmail(emails, html)
            resolve({
                apiStatus: 1,
                payload: {
                    msg: "Emails are Being Sent"
                }
            })
        } catch(err){
            reject({
                apiStatus: 500,
                payload: {
                    msg: "Service Not currently available!"
                }
            })
        }
    })
}

module.exports = {
    arrayEmailSender,
}
