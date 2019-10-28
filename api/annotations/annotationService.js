const Item = require('./annotation');

//Create REST API, adds CRUD to Mongog's schema
Item.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Item.updateOptions({ new: true, runValidators: true });

module.exports = Item