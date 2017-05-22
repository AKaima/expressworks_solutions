var express = require('express')
var app = express()

app.use(express.static(process.argv[3]))
app.use(require('stylus').middleware(__dirname + '/public'))

app.listen(process.argv[2])