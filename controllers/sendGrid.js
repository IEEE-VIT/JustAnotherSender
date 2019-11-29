const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (emails, html)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const msg = {
                to: emails,
                from: 'limphned@gmail.com',
                subject: 'The Enigma Is Going To Come Tomorrow',
                text: 'and easy to do anywhere, even with Node.js',
                html: html,
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