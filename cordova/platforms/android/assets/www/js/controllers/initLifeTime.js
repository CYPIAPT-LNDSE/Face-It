'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var emotionResults = [{
  type: 'happiness',
  properType: 'Happiness',
  data: [{ "id": "user", "score": 10 }, { "id": "api", "score": 12 }]
}, {
  type: 'sadness',
  properType: 'Sadness',
  data: [{ "id": "user", "score": 11 }, { "id": "api", "score": 17 }]
}, {
  type: 'surprise',
  properType: 'Surprise',
  data: [{ "id": "user", "score": 11 }, { "id": "api", "score": 12 }]
}];

function initLifeTime() {
  lifeTime(emotionResults);
  lifeTimeEventListener();
}

function lifeTimeEventListener() {
  $('#roundResults2').click(function () {
    var resultsPage = Handlebars.compile(pages['roundResultContainer'])({
      roundAnswers: results.reduce(function (acc, current, i) {
        return acc + Handlebars.compile(pages['roundAnswer'])({
          userResult: current.userGuess,
          apiConfidanceValue: ~~(current.apiGuess[1] * 100),
          apiEmotion: current.apiGuess[0],
          imagePath: 'assets/imgs/' + Object.keys(results[i])[0] + '.jpg'
        });
      }, ''),
      risultatone: risultatone(results)
    });
    clearPage('main');
    addPage('roundResult', resultsPage);
    showPage('roundResult');
    roundResultEventListener();
  });
  $('#playAgain2').click(function () {
    initLevel();
    results = [];
  });
}

function totalQuestions(results) {
  return results.reduce(function (acc, el) {
    return acc + el.data[0].score;
  }, 0);
}

function significantDifference(_ref, bound) {
  var _ref2 = _slicedToArray(_ref, 2),
      user = _ref2[0],
      api = _ref2[1];

  return Math.abs(user.score - api.score) / api.score >= bound;
}

function emotionsToWorkOn(results, bound) {
  return results.reduce(function (acc, el) {
    return significantDifference(el.data, bound) ? acc.concat(el.type) : acc;
  }, []);
}

function lifeTime(emotionResults) {
  var workOn = emotionsToWorkOn(emotionResults, 0.2);
  var lifeTimePage = Handlebars.compile(pages['lifeTimePage'])({
    emotions: emotionResults,
    workOn: workOn
  });
  clearPage('main');
  addPage('lifeTimePage', lifeTimePage);
  showPage('lifeTimePage');

  // add lifetime graph function here
  if (!$('#lifetime-results-page__lifetime-graph').find('svg').length) {
    db.get('historical').then(function (doc) {
      console.log(doc);
      lifeTimeResults(doc.historical);
    });
  }

  if (!$('.emotion').find('svg').length) {
    (function () {
      var total = totalQuestions(emotionResults);
      emotionResults.map(function (el) {
        emotionResultGraphPercent(total, el.data, '#' + el.type);
      });
    })();
  }
}
