'use strict'

var mongoose = require('mongoose'),
Annotation = mongoose.model('Annotations')
mongoose.set('useFindAndModify', false);

exports.list_all_annotations = function(req, res) {
   Annotation.find({}, function(err, msg) {
      if (err)
      res.send(err)
      res.json(msg)
   })
}

exports.create_annotation = function(req, res) {
   var new_msg = new Annotation(req.body)
   new_msg.save(function(err, msg) {
   if (err)
      res.send(err)
   res.json(msg)
   })
}

exports.read_annotation = function(req, res) {
   Annotation.findById(req.params.msgId, function(err, msg) {
   if (err)
      res.send(err)
   res.json(msg)
   })
}

exports.update_annotation = function(req, res) {
   Annotation.findByIdAndUpdate({_id: req.params.msgId}, req.body, { new: true }, function(err, msg) {
   if (err)
      res.send(err)
   res.json(msg)
   })
}

exports.delete_annotation = function(req, res) {
   Annotation.remove({
      _id: req.params.msgId
   }, function(err, msg) {
   if (err)
      res.send(err)
   res.json('Annotation successfully deleted')
   })
}