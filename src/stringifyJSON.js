// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var str = '[';
  var newObj = '{';
  if (typeof obj === 'number') {
    return "" + obj;
  } else if (typeof obj === 'function' || obj === 'function') {
    return "";
  } else if (typeof obj === 'boolean') {
    return "" + obj;
  } else if (typeof obj === undefined || obj === 'undefined') {
    return '';
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  } else if (Array.isArray(obj) && obj.length > 0) {    //[8, 'hi'],
    for (var i = 0; i < obj.length; i++) {  //first loop 8
      str += stringifyJSON(obj[i]) + ","; // ["8", "'hi", ]
    }
    return str.slice(0, str.length - 1) + "]";
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    var count = 0;
    for (var key in obj) {
      count++;
      if (typeof obj[key] === 'function' || typeof obj[key] === undefined) {
        return '{}';
      } else {
        newObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (count === 0) {
      return '{}';
    } else {
      return newObj.slice(0, newObj.length - 1) + "}";
    }
  }
};
