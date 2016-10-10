'use strict';

function hideOnRight(elementToHide) {
  var id = '#' + elementToHide;
  return function () {
    $(id).click(function () {
      $('#tests1').hide("slide", { direction: "right" }, 1000);
    });
  };
}

function showFromLeft(elementToShow) {
  var id = '#' + elementToShow;
  return function () {
    $(id).click(function () {
      $('#tests1').show("slide", { direction: "right" }, 1000);
    });
  };
}
//# sourceMappingURL=animation.js.map
//# sourceMappingURL=animation.js.map
