'use strict';

module.exports = function(app){
  var fib = require('../controllers/fibController');

  app.route('/fibonacci/:n')
    .get(fib.getNthElement);
};
