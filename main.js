function resizeHeader(className) {
  var list = document.getElementsByClassName(className)
  for (let node of list) {
    var classNames = node.className.split(" ");
    if (classNames.indexOf('widthIncrement') === -1) {
      var left = node.style.left.replace('px', '');
      var base = 1344;

      if (left > base) {
        var increment = (left - base) / 224;
        var newLeft = (base + (increment * 112)) + 'px';
        node.style.left = newLeft;
        node.classList.add('widthIncrement');
        node.classList.add('increment-' + increment);
      }
    }
  }
}

function resizeItem(className) {
  var list = document.getElementsByClassName(className)
  for (let node of list) {
    var classNames = node.className.split(" ");
    if (classNames.indexOf('widthIncrement') === -1) {
      var left = node.style.left.replace('px', '');
      var increment = left / 224;
      var newLeft = (increment * 112) + 'px';
      node.style.left = newLeft;
      node.classList.add('widthIncrement');
      node.classList.add('increment-' + increment);
    }
  }
}

function onClick() {
  document.getElementsByTagName('body')[0]
    .classList
    .add('make-compact-container');

  resizeItem("gridItemContainer");
  resizeHeader("gridColumnHeader");
  resizeHeader("gridColumnVBorder");
}

function createNode() {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Compact");
  newDiv.classList.add('make-compact');
  newDiv.appendChild(newContent);
  newDiv.onclick = onClick;

  var body = document.getElementsByTagName('body')[0]
  body.appendChild(newDiv);
}

createNode();
