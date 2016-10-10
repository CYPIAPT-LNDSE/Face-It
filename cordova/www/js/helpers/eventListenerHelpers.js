'use strict';

function roundResults() {
  $('#roundResults').click(function () {
    $('#lifeTimePage').hide();
    $('#roundResult').show("slide", { direction: "right" }, 500);
    results = [];
  });
}

function lifeTime() {
  $('#lifeTime').click(function () {
    $('#roundResult').hide();
    $('#lifeTimePage').show("slide", { direction: "right" }, 500);
    results = [];
  });
}

function playAgain() {
  $('#playAgain1').click(function () {
    $('#roundResult').hide();
    $('#landing').show("slide", { direction: "right" }, 500);
    results = [];
  });
  $('#playAgain2').click(function () {
    $('#lifeTimePage').hide();
    $('#landing').show("slide", { direction: "right" }, 500);
    results = [];
  });
}
//# sourceMappingURL=eventListenerHelpers.js.map
//# sourceMappingURL=eventListenerHelpers.js.map
