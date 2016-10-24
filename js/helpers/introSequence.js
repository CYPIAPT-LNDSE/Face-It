function surpriseIconAnimation() {
  $('#surprise-icon')
    // Fall down
    .velocity({translateX:[10,11], translateY:[219, 60]}, 800, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:216}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:218}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    // Travel right
    .velocity({translateX:250}, 1500)
    // Fall down
    .velocity({translateY:374}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:371}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:374}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:373}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:374}, 80, [0.33, 0, 0.66, 1])
    // Travel left
    .velocity({translateX:27}, 1500)
    // Fall down
    .velocity({translateY:529}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:526}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:529}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:528}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:529}, 80, [0.33, 0, 0.66, 1])
    // Travel right
    .velocity({translateX:250}, 1500)
    // Fall down
    .velocity({translateY:580}, 600)
}

function sadIconAnimation() {
  $('#sad-icon')
    // Fall down
    .velocity({translateX:[10,11], translateY:[219, 60]}, 800, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:216}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:218}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    // Travel right
    .velocity({translateX:250}, 1500)
    // Fall down
    .velocity({translateY:374}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:371}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:374}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:373}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:374}, 80, [0.33, 0, 0.66, 1])
    // Travel left
    .velocity({translateX:27}, 1500)
    // Fall down
    .velocity({translateY:529}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:526}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:529}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:528}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:529}, 80, [0.33, 0, 0.66, 1])
    // Travel right
    .velocity({translateX:250}, 1500)
    // Fall down
    .velocity({translateY:580}, 600)
}

function userIconAnimation() {
  $('#user-icon')
    // Fall down
    .velocity({translateX:[10,11], translateY:[219, 60]}, 800, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:216}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:218}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    // Scale
    .velocity({scale: "400%"}, {delay: 400, duration: 800})
    // Fall down
    .velocity({translateY:450}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:445}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:450}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:447}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:450}, 80, [0.33, 0, 0.66, 1])
  $('#conveyer-group')
    .velocity({display: "none", opacity: 0}, {delay: 1400})
  $('.intro-page__speech-bubble')
    .velocity({opacity: 1}, {delay: 3800})
}

surpriseIconAnimation()
setTimeout(sadIconAnimation, 2500)
setTimeout(userIconAnimation, 5000)
