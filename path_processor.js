var exports = module.exports = {};
var parse = function(x) {
  return x.split(/\//).slice(1);
}

exports.process = function(x) {
  var args = [];
  requests = parse(x);

  return {
    command: requests[0],
    args: requests.slice(1)
  }
}