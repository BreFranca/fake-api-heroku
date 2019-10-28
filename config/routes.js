const express = require('express');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/api', router);

  //Registering API methods in router
  const bagService = require('../api/annotations/annotationService');
  bagService.register(router, '/annotations');

}