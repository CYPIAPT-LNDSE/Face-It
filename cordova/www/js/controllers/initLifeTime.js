'use strict';

function initLifeTime() {

  $('#main').append(pages['lifeTimeResults']); //here  massive calculation for lifetime resut page and render it

  lifeTimeEventListener();
}

function lifeTimeEventListener() {
  function roundResults() {
    $('#roundResults').click(function () {
      $('#lifeTimePage').hide();
      $('#roundResult').show("slide", { direction: "right" }, 500);
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
}
//# sourceMappingURL=initLifeTime.js.map
//# sourceMappingURL=initLifeTime.js.map
