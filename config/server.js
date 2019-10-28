const express = require('express')
const server = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true }))

server.use(bodyParser.json())

server.listen(port, function() {
    console.log('Message RESTful API server started on: ' + port)
})

module.exports = server