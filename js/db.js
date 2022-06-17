const mysql = require('mysql2');
let mail_send = require('./mail_send.js');

  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'sail',
    password: 'password',
    database: 'test_case'
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM articles WHERE mail_send = 0", function (err, result, fields) {
        if (err) throw err;
        for (i = 0; i < result.length; i++) {
            console.log('Row: ' + JSON.stringify(result[i]));
            console.log(result[i].content);
            mail_send.mail_content(result[i].content);
            connection.query("UPDATE articles SET mail_send = 1 WHERE id = "+result[i].id, function (err, result, fields) {
                if (err) throw err;
                console.log('işlem başarılı');
              });
        }
      });
    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
  })