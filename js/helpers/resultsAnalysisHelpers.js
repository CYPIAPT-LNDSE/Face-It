function totalMatchigResultsPercentage(dummyResults){

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

