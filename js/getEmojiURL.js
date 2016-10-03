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
  return '../assets/icons/' + dictionary[emotion];
}

getEmojiPath(scores);
