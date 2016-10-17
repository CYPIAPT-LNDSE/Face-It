'use strict';

// Remove when user level is being tracked

var userLevel = 10.4;

function levelDisplay(lastDigit) {

  var levelDisplayText = document.getElementById('level-display-text');

  if (lastDigit === 0) {
    levelDisplayText.textContent = userLevel + 1;
  } else {
    levelDisplayText.textContent = Math.ceil(userLevel);
  }
}

function levelAnimation(lastDigit) {

  var userPosition = void 0;
  var animationDuration = void 0;

  switch (lastDigit) {
    case 2:
      userPosition = 70;
      animationDuration = 1200;
      break;
    case 4:
      userPosition = 130;
      animationDuration = 1600;
      break;
    case 6:
      userPosition = 190;
      animationDuration = 1800;
      break;
    case 8:
      userPosition = 245;
      animationDuration = 2000;
      break;
    default:
      userPosition = 10;
  }

  $('#user-icon').velocity({ translateX: [10, 11], translateY: [219, 60] }, 800, [0.33, 0, 0.66, 0.33]).velocity({ translateY: 216 }, 100, [0.33, 0, 0.66, 1]).velocity({ translateY: 219 }, 80, [0.33, 0, 0.66, 1]).velocity({ translateY: 218 }, 100, [0.33, 0, 0.66, 1]).velocity({ translateY: 219 }, 80, [0.33, 0, 0.66, 1]).velocity({ translateX: userPosition }, { duration: animationDuration - 10, delay: 50 });

  if (lastDigit !== 0) {
    setTimeout(function () {
      $('.gear').velocity({
        rotateZ: '180deg'
      }, {
        duration: animationDuration - 100
      });
    }, 1050);
  }
}

(function () {
  var lastDigit = userLevel.toFixed(1);
  lastDigit = parseInt(lastDigit[lastDigit.length - 1]);
  levelDisplay(lastDigit);
  levelAnimation(lastDigit);
})();
