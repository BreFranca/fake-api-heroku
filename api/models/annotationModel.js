'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var annotationSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model('Annotations', annotationSchema)
