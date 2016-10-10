'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initGame() {

  var gameSet = R.compose(generateWrongAnswerData, generateGameSet)(images);
  renderGamePages(gameSet);
  eventListenerGamePage(gameSet);
}

function eventListenerGamePage(gameSet) {
  [1, 2, 3, 4, 5].forEach(function (el, i) {
    if (el < 5) {
      $('#gamePage' + el).find('button').click(function (event) {
        $('#gamePage' + el).hide();
        $('#gamePage' + (Number(el) + 1)).show("slide", { direction: "left" }, 500);
        gameSet[i].userGuess = $(this)[0].innerHTML;
        results.push(gameSet[i]);
      });
    } else {
      $('#gamePage' + el).find('button').click(function (event) {
        gameSet[i].userGuess = $(this)[0].innerHTML;
        results.push(gameSet[i]);
        initRoundResult(results, el);
      });
    }
  });
}

//
//Main functions
//

function renderGamePages(gameSet) {
  [1, 2, 3, 4, 5].forEach(function (el, i) {
    var answerType = randomiser2();
    $('#main').append(Handlebars.compile(pages['gamePage'])({
      id: 'gamePage' + el,
      biggie: 'assets/imgs/' + Object.keys(gameSet[i])[0] + '.jpg',
      choiceL: String(gameSet[i][answerType[0]].emojiPath),
      buttonL: gameSet[i][answerType[0]].emotion[0],
      choiceR: String(gameSet[i][answerType[1]].emojiPath),
      buttonR: gameSet[i][answerType[1]].emotion[0]
    }));
  });
}
function renderResPages(gameSet) {
  [1, 2, 3, 4, 5].forEach(function (el, i) {
    $('#res' + el).find('img').attr('src', 'assets/imgs/' + Object.keys(gameSet[i])[0] + '.jpg');
  });
}

function generateGameSet(images) {
  var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'john doe';

  return randomiser(images).map(function (el, i, array) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, el, images[el][0]), _defineProperty(_ref, 'userGuess', 'noresponse'), _defineProperty(_ref, 'username', username), _defineProperty(_ref, 'apiGuess', apiWinner(images[el][0]['scores'])), _defineProperty(_ref, 'correctAnswer', {
      emotion: apiWinner(images[el][0]['scores']),
      emojiPath: 'assets/icons/' + emojiPath(apiWinner(images[el][0]['scores'])[0])
    }), _ref;
  });
}

//
//generic helpers
//

function generateWrongAnswerData(gameSet) {
  return gameSet.map(function (el, index) {
    el.wrongAnswer = {
      emotion: [getOtherEmotion(el.correctAnswer['emotion'][0])],
      emojiPath: 'assets/icons/' + emojiPath(getOtherEmotion(el.correctAnswer['emotion'][0]))
    };
    return el;
  });
}

function getOtherEmotion(emotion, pos) {
  var emotions = ['happiness', 'sadness', 'anger', 'neutral', 'surprise'];
  emotions.splice(emotions.indexOf(emotion), 1);
  return emotions[2];

  function randomNumber() {
    return ~~(Math.random() * 5);
  }
}

function randomiser(images) {
  return Object.keys(images).sort(function () {
    return .5 - Math.random();
  }).slice(0, 5);
}

function emojiPath(emotion) {
  var dict = {
    'anger': 'angry-emoji.svg', 'sadness': 'sad-emoji.svg', 'surprise': 'surprise-emoji.svg', 'neutral': 'neutral-emoji.svg', 'happiness': 'happy-emoji.svg' };
  return dict[emotion];
}

function apiWinner(scores) {
  var tempNumber = 0;
  var emotion = void 0;
  for (prop in scores) {
    if (scores[prop] > tempNumber && String(scores[prop]).includes('-') === false) {
      tempNumber = scores[prop];
      emotion = prop;
    }
  }
  return [emotion, tempNumber];
}

function eventListenerResultPages() {
  playAgain();
  lifeTime();
  roundResults();
}

function randomiser2() {
  var dict = ['correctAnswer', 'wrongAnswer'];
  if (Math.random() > 0.5) {
    return dict;
  } else {
    return [dict[1], dict[0]];
  }
}
