const aws = require("aws-sdk")
const path = require("path")

aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "ap-south-1"
  });

const ses = new aws.SES({ apiVersion: "2010-12-01" })

const awsMailer = (emails, html, senderEmail, subject, nameOfEmail)=>{
    return new Promise((resolve, reject)=>{
        const params = {
            Destination: {
                ToAddresses: emails // Email address/addresses that you want to send your email
            },
            Message: {
                Body: {
                Html: {
                    // HTML Format of the email
                    Charset: "UTF-8",
                    Data: html, 
                },
                },
                Subject: {
                Charset: "UTF-8",
                Data: subject,
                }
            },
            Source: nameOfEmail+" <" + senderEmail + "> "
            };

        const sendEmail = ses.sendEmail(params).promise();
        sendEmail
            .then((data) => {
                console.log( data )
                resolve()
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            })
    })
}

module.exports = {
    awsMailer,
}