var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function done(err, data){
        var book
        if(err)
            res.send(500)
        try {
            book = JSON.parse(data)
        }
        catch (err) {
            res.send(500)
        }
        res.json(book)
    })
})

app.listen(process.argv[2])