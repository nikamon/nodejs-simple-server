'use strict';


/**
 *
 * body Body  (optional)
 * returns inline_response_200
 **/
exports.hashPOST = function(body) {
  return new Promise(function(resolve, reject) {
  const crypto = require('crypto');

  const hash = crypto.createHash('sha256')
                     .update(body.data)
                     .digest('base64');
    var examples = {};
    examples['application/json'] = {
        "hash" : hash
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns String
 **/
exports.rootGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Hello HTTP GET";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

