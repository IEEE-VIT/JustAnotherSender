const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (emails)=>{
    return new Promise(async (resolve, reject)=>{
        console.log(emails)
        try{
            const msg = {
                to: emails,
                from: 'limphned@gmail.com',
                subject: 'The Enigma Is Going To Come Tomorrow',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<h1>This is a Test Email sending Pipeline, please ignore. If this message is in spam please inform me</h1>',
              };
            sgMail.sendMultiple(msg)
                .catch((err)=>console.log(err.response.body))
        } catch(err){
            reject()
        }
    })
}

module.exports  = {
    sendEmail,
}