'use strict';

function getEmojiPath(scores) {

  var dictionary = {
    happiness: 'happy-emoji.svg',
    sadness: 'sad-emoji.svg',
    neutral: 'neutral-emoji.svg',
    surprise: 'surprise-emoji.svg',
    anger: 'angry-emoji.svg'
  };

  var tempNumber = 0;
  var emotion = void 0;

  for (prop in scores) {
    if (scores[prop] > tempNumber && String(scores[prop]).includes('-') === false) {
      tempNumber = scores[prop];
      emotion = prop;
    }
  }
  return '../assets/icons/' + dictionary[emotion];
}

getEmojiPath(scores);
//# sourceMappingURL=getEmojiURL.js.map
//# sourceMappingURL=getEmojiURL.js.map
