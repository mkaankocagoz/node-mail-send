const path = require('path');
const express = require('express')
const app = express()
const port = 3000

var CronJob = require('cron').CronJob;

new CronJob('15 1 * * * ', function(){
  require('./js/db.js');
}, null, true, "Europe/Istanbul");

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'html/index.html'))
})

app.post('/send-email', (req, res) => {
  require('./js/db.js');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
