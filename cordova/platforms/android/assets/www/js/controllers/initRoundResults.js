'use strict';

function initRoundResult(results, handleOnPrevious) {
  $('#main').append(Handlebars.compile(pages['roundResultContainer'])({
    roundAnswers: results.reduce(function (acc, current, i) {
      return acc + Handlebars.compile(pages['roundAnswer'])({
        //here populate single answer stuff 
        userResult: current.userGuess,
        apiConfidanceValue: ~~(current.apiGuess[1] * 100),
        apiEmotion: current.apiGuess[0],
        imagePath: 'assets/imgs/' + Object.keys(results[i])[0] + '.jpg'
      });
    }, ''),
    risultatone: risultatone(results)
  }));

  $('#gamePage' + handleOnPrevious).hide();
  $('#roundResult').show("slide", { direction: "left" }, 500);

  roundResultEventListener();
}

function risultatone(results) {
  var accumulator = 0;
  results.forEach(function (el) {
    if (el.userGuess === el.correctAnswer.emotion[0]) accumulator++;
  });
  return String(accumulator / 5 * 100);
}
function roundResultEventListener() {

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
}
