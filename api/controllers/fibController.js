'use strict';

var nThFibonacciNumber = function (n) {
  if(n <= 0)
    return 0;

  if(n === 1 || n === 2)
    return 1;

  var n1 = 0;
  var n2 = 1;

  for(var i = 1; i < n; i++) {
    var temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  return n2;
};

exports.getNthElement = function(req, res) {

  try {
    var nThElement = nThFibonacciNumber(req.params.n);
  
    if(nThElement < 0)
      res.send(`${req.params.n} is an invalid input`);
    
    res.json({n: nThElement});
  } catch(error) {
    res.send(`An error occurred: ${error}`);
  }
};
