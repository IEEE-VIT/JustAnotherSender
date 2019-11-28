const sendGrid = require("./sendGrid.js")

const arrayEmailSender = (emails)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            sendGrid.sendEmail(emails)
            resolve({
                apiStatus: 2,
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
