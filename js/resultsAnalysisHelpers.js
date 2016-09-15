function totalMatchigResultsPercentage(){

  userGuesses = [];
  apiWinners = [];
  emotionsTested = [];
  successRateForEachEmotion = [];

  let tempNumber = 0;
  let tempEmotion = '';
  let numberOfTimesEmotionTested = 0;
  let usersPointForEachEmotion = 0;
  let number = 0;

  let numberOfTimesAPIAgreesWithTheUser = 0;

  dummyResults.forEach(function(obj){
    for(prop in obj){
      if(Array.isArray(obj[prop])){
        for(prop2 in obj[prop][0]['scores']){
          if(obj[prop][0]['scores'][prop2] > tempNumber && (String(obj[prop][0]['scores'][prop2]).includes('-') === false)){
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
    if(userGuesses[number] === apiWinners[number]){numberOfTimesAPIAgreesWithTheUser++;}
    number++;
  });

  let overall = (numberOfTimesAPIAgreesWithTheUser/userGuesses.length) * 100 + '%';

  for(let i = 0; i < apiWinners.length; i++){
    if(!emotionsTested.includes(apiWinners[i])){
      emotionsTested.push(apiWinners[i]);
    }
  } //this for loop pushes each emotion only once into the 'emotionsTested' array

  for(let i = 0; i < emotionsTested.length; i++){
    for(let k = 0; k < apiWinners.length; k++){
      if(emotionsTested[i] === apiWinners[k]){
        numberOfTimesEmotionTested++;
        if(apiWinners[k] === userGuesses[k]){
          usersPointForEachEmotion++;
        }
      }
    }
    successRateForEachEmotion.push(emotionsTested[i] + ': ' + ((usersPointForEachEmotion/numberOfTimesEmotionTested) * 100) + '%');
    numberOfTimesEmotionTested = 0;
    usersPointForEachEmotion = 0;
  } //this for loop calculates how many times the user guessed correctly for each individual emotion

  console.log({
     overall: overall,
     emotionsTested: emotionsTested,
     successRateForEachEmotion: successRateForEachEmotion
  })

  return {
     overall: overall,
     emotionsTested: emotionsTested,
     successRateForEachEmotion: successRateForEachEmotion
  }
}

let dummyResults = [{
 "h19075_1280":[ //name of the image
    {
      "faceRectangle": {
        "left": 68,
        "top": 97,
        "width": 64,
        "height": 97
      },
      "scores": {
        "anger": 0.00300731952,
        "contempt": 5.14648448E-08,
        "disgust": 9.180124E-06,
        "fear": 0.0001912825,
        "happiness": 0.9875571,
        "neutral": 0.0009861537,
        "sadness": 1.889955E-05,
        "surprise": 0.008229999
      }
    }
  ],
userGuess='happiness'},{
  "h187696_1920": [
    {
      "faceRectangle": {
        "height": 571,
        "left": 285,
        "top": 161,
        "width": 571
      },
      "scores": {
        "anger": 6.029397E-07,
        "contempt": 3.36813537E-05,
        "disgust": 6.366248E-07,
        "fear": 2.94457365E-08,
        "happiness": 0.993061066,
        "neutral": 0.00689892145,
        "sadness": 3.68238875E-06,
        "surprise": 1.354874E-06
      }
    }
  ],
  userGuess='anger'},{
  "s594519_1920":[
    {
      "faceRectangle": {
        "height": 340,
        "left": 538,
        "top": 278,
        "width": 340
      },
      "scores": {
        "anger": 0.00117295515,
        "contempt": 3.11555937E-08,
        "disgust": 5.395609E-05,
        "fear": 0.009736914,
        "happiness": 0.00213388773,
        "neutral": 5.04133277E-05,
        "sadness": 0.9691437,
        "surprise": 0.0177081488
      }
    }
  ],
  userGuess='anger'},
  {
  "su810005_1280":[
    {
      "faceRectangle": {
        "height": 504,
        "left": 349,
        "top": 22,
        "width": 504
      },
      "scores": {
        "anger": 2.01399848E-06,
        "contempt": 8.645322E-09,
        "disgust": 1.00035027E-06,
        "fear": 4.006906E-05,
        "happiness": 1.12519183E-06,
        "neutral": 1.15005287E-06,
        "sadness": 3.06504266E-09,
        "surprise": 0.999954641
      }
    }
  ],
  userGuess='anger'},
  {
  "su211505_1280":[
    {
      "faceRectangle": {
        "height": 424,
        "left": 395,
        "top": 178,
        "width": 424
      },
      "scores": {
        "anger": 0.0100501953,
        "contempt": 0.000286204857,
        "disgust": 0.001489248,
        "fear": 0.01997851,
        "happiness": 3.027972E-06,
        "neutral": 0.0200685672,
        "sadness": 2.47310945E-05,
        "surprise": 0.9480995
      }
    }
  ],
  userGuess='anger'
}]
