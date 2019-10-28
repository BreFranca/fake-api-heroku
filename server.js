var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Annotation = require('./api/models/annotationModel'),
bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/annotationdb')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var routes = require('./api/routes/annotationRoutes')

routes(app)

app.listen(port)

console.log('Message RESTful API server started on: ' + port);