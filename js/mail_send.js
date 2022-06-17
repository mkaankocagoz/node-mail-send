'use strict';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true, // use SSL
  auth: {
    user: 'nodemailer@gmail.com',
    pass: '******'
  }
});

transporter.verify(function (error, success) {
  if (error) throw error;
  console.log('Bağlantı başarıyla sağlandı');
});

let mail_content = function(data){
    let bilgiler = {
        from: '****@gmail.com',
        to: '*******@gmail.com',
        subject: 'Yeni Eklenen Makale',
        text: data,
    }

    /*transporter.sendMail(bilgiler, function (error, info) {
      if (error) throw error;
      console.log('Eposta gönderildi ' + info.response);
    });*/
};

module.exports = {
    mail_content: mail_content
}