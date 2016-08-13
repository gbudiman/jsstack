var md5 = require('md5');
var exports = module.exports = {};

exports.work = function(x) {
  switch(x.command) {
    case 'message': return hash_message(x.args.pop()); break;
  }
}

var hash_message = function(x) {
  return md5(x);
}