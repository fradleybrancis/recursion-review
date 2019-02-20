// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, currentNode) {
  currentNode = currentNode || document.body;

  var newArr = [];

  if (currentNode.classList && currentNode.classList.contains(className)) {
    newArr.push(currentNode);
  }
  if (currentNode.hasChildNodes()) {
    for (var i = 0; i < currentNode.childNodes.length; i++) {
      var currentChild = currentNode.childNodes[i];
      newArr = newArr.concat(getElementsByClassName(className, currentChild));
    }
  }
  return newArr;

};
// document.body = 1 Element. checking to see if it have a class list. if it does have class list, does it have a class name? if it does, push Element.length
// if element have childnodes, recursion.
//You should use document.body, element.childNodes, and element.classList