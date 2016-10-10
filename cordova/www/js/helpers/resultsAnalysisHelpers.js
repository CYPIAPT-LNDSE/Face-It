'use strict';

function totalMatchigResultsPercentage(dummyResults) {

  userGuesses = [];
  apiWinners = [];
  emotionsTested = [];
  successRateForEachEmotion = [];

  var tempNumber = 0;
  var tempEmotion = '';
  var numberOfTimesEmotionTested = 0;
  var usersPointForEachEmotion = 0;
  var number = 0;

  var numberOfTimesAPIAgreesWithTheUser = 0;

  dummyResults.forEach(function (obj) {
    for (prop in obj) {
      if (Array.isArray(obj[prop])) {
        for (prop2 in obj[prop][0]['scores']) {
          if (obj[prop][0]['scores'][prop2] > tempNumber && String(obj[prop][0]['scores'][prop2]).includes('-') === false) {
            tempNumber = obj[prop][0]['scores'][prop2];
            tempEmotion = prop2;
          }
        }
        apiWinners.push(tempEmotion);
        tempNumber = 0;
        tempEmotion = '';
      } else {
        userGuesses.push(obj['userGuess']);
      }
    }
    if (userGuesses[number] === apiWinners[number]) {
      numberOfTimesAPIAgreesWithTheUser++;
    }
    number++;
  });

  var overall = numberOfTimesAPIAgreesWithTheUser / userGuesses.length * 100 + '%';

  for (var i = 0; i < apiWinners.length; i++) {
    if (!emotionsTested.includes(apiWinners[i])) {
      emotionsTested.push(apiWinners[i]);
    }
  } //this for loop pushes each emotion only once into the 'emotionsTested' array

  for (var _i = 0; _i < emotionsTested.length; _i++) {
    for (var k = 0; k < apiWinners.length; k++) {
      if (emotionsTested[_i] === apiWinners[k]) {
        numberOfTimesEmotionTested++;
        if (apiWinners[k] === userGuesses[k]) {
          usersPointForEachEmotion++;
        }
      }
    }
    successRateForEachEmotion.push(emotionsTested[_i] + ': ' + usersPointForEachEmotion / numberOfTimesEmotionTested * 100 + '%');
    numberOfTimesEmotionTested = 0;
    usersPointForEachEmotion = 0;
  } //this for loop calculates how many times the user guessed correctly for each individual emotion

  console.log({
    overall: overall,
    emotionsTested: emotionsTested,
    successRateForEachEmotion: successRateForEachEmotion
  });

  return {
    overall: overall,
    emotionsTested: emotionsTested,
    successRateForEachEmotion: successRateForEachEmotion
  };
}
//# sourceMappingURL=resultsAnalysisHelpers.js.map
//# sourceMappingURL=resultsAnalysisHelpers.js.map
