const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'gurkirtsingh143@gmail.com',
        pass: 'alpkndsdmlkrxvrk'
    }
})
const sendEmail = function(user, email, message){
    console.log('Sending mail...')

    const mailOptions = {
        from: 'gurkirtsingh143@gmail.com',
        to: 'gurkirtsingh143@gmail.com',
        subject: user +': '+email,
        text: message
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log('Mail sent successfully!!!')

        }
    })
}

module.exports = sendEmail