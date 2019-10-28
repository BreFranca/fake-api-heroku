'use strict'

module.exports = function(app) {
   var annotation = require('../controllers/annotationController')

   // annotation Routes
   app.route('/annotations')
      .get(annotation.list_all_annotations)
      .post(annotation.create_annotation)

   app.route('/annotations/:annotationId')
      .get(annotation.read_annotation)
      .put(annotation.update_annotation)
      .delete(annotation.delete_annotation)
}
