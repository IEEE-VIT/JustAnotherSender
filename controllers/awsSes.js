const aws = require("aws-sdk")

//this should be email of sender I guess
var email = "sarthakpranesh08@gmail.com"

//loads up the configuration of the aws ses instance
aws.config.loadFromPath(__dirname, "/config.json")

const ses = new aws.SES()

const awsMailer = (emails, html, senderEmail, subject, nameOfEmail)=>{
    return new Promise((resolve, reject)=>{
        try{
            var sesMail = "From: "+nameOfEmail+" <"+senderEmail+">\n"
                sesMail = sesMail + "To: " + emails + "\n"
                sesMail = sesMail + "Subject: " + subject + "\n"
                sesMail = sesMail + "MIME-version: 1.0\n"
                sesMail = sesMail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n"
                sesMail = sesMail + "--NextPart\n"
                sesMail = sesMail + "Content-Type: text/html; charset=us-ascii\n\n"
                sesMail = sesMail + html
                sesMail = sesMail + "--NextPart\n"
                sesMail = sesMail + "Content-Type: text/plain;\n"
                sesMail = sesMail + "--NextPart"

            console.log(sesMail)

            //defining email template to be sent
            const finalEmailTemplate = {
                RawMessage: { Data: new Buffer(sesMail) },
                Destinations: emails,
                Source: "'AWS Tutorial Series' <" + email + ">" 
            }
            const respSes = ses.sendRawEmail(finalEmailTemplate)
            console.log(respSes)
            resolve()
        } catch(err){
            console.log(err)
            reject(err)
        }
    })
}

module.exports = {
    awsMailer,
}