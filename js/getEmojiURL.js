function getEmojiPath(scores) {

  let dictionary = {
    happiness:'happy-emoji.svg',
    sadness:'sad-emoji.svg',
    neutral:'neutral-emoji.svg',
    surprise:'surprise-emoji.svg',
    anger:'angry-emoji.svg'
  }

  let tempNumber = 0;
  let emotion;

  for(prop in scores){
    if(scores[prop] > tempNumber && String(scores[prop]).includes('-') === false){
      tempNumber = scores[prop];
      emotion = prop;
    }
  }

  // console.log(tempNumber);
  // console.log(emotion);
  console.log(dictionary[emotion])

  console.log('../assets/icons/' + dictionary[emotion]);

  return '../assets/icons/' + dictionary[emotion];
}

// const scores = {
//   "anger": 0.00300731952,
//   "contempt": 5.14648448E-08,
//   "disgust": 9.180124E-06,
//   "fear": 0.0001912825,
//   "happiness": 0.9875571,
//   "neutral": 0.0009861537,
//   "sadness": 1.889955E-05,
//   "surprise": 0.008229999
// }

getEmojiPath(scores);
