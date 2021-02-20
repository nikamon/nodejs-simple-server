'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.hashPOST = function hashPOST (req, res, next, body) {
  Default.hashPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
