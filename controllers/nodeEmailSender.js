const nodeMailer = require("nodemailer")

const sendEmails = (emails, html, sender, subject, nameOfEmail)=>{
    return new Promise((resolve, reject)=>{
        try{
            const transporter = nodeMailer.createTransport({
                host: process.env.SERVICE_HOST,
                port: process.env.SERVICE_PORT,
                auth: {
                    user: process.env.USER_NAME,
                    pass: process.env.USER_PASSWORD
                }
            })
            const mailOptions = {
                from: {
                    name: nameOfEmail,
                    address: sender,
                },
                to: emails,
                subject: subject,
                text: "Send by using JustAnotherSender",
                html: html,
                dsn: {
                    id: 'some random message specific id',
                    return: 'headers',
                    notify: ['failure', 'delay'],
                    recipient: sender
                }
            }
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    reject(err)
                }
                const sentTo = info.accepted
                const notSentTo = info.rejected
                console.log("Message " + info.messageId + " sent: " + info.response)
                resolve({
                    sentTo,
                    notSentTo
                })
            })
        } catch(err){
            console.log(err)
        }
    })
}

module.exports = {
    sendEmails,
}