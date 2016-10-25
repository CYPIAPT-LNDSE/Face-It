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
    // Scale, hide conveyer belts, and display speech bubble
  $('#user-icon')
    .velocity({scale: "400%"}, {delay: 400, duration: 800, begin: function() {
        $('#conveyer-group').velocity({display: "none", opacity: 0})
        $('.intro-page__speech-bubble').velocity({opacity: 1}, {delay: 2000, display: "block", complete: function() {
          speechBubble()
        }})
      }
    })
    // Fall down
    .velocity({translateY:450}, 600, [0.33, 0, 0.66, 0.33])
    .velocity({translateY:445}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:450}, 80, [0.33, 0, 0.66, 1])
    .velocity({translateY:447}, 100, [0.33, 0, 0.66, 1])
    .velocity({translateY:450}, 80, [0.33, 0, 0.66, 1])
}

function speechBubble() {
  $(document).on("click", function() {
    var speechBubble = $(".intro-page__speech-bubble");
    if (speechBubble.hasClass("intro-page__speech-bubble--1")) {
      $("span").text("I was built to recognise emotions")
      $(speechBubble).switchClass("intro-page__speech-bubble--1", "intro-page__speech-bubble--2")
    }
    else if (speechBubble.hasClass("intro-page__speech-bubble--2")) {
      $("span").text("But I need some practice before I'm ready to leave the factory")
      $(speechBubble).switchClass("intro-page__speech-bubble--2", "intro-page__speech-bubble--3")
    }
    else if (speechBubble.hasClass("intro-page__speech-bubble--3")) {
      $("span").text("Can you help me practice recognising emotions?")
      $(speechBubble).removeClass("intro-page__speech-bubble--3")
    }
    else {
      tutorial()
    }
  })
}

function tutorial() {
  console.log("tutorial")
}

surpriseIconAnimation()
setTimeout(sadIconAnimation, 2500)
setTimeout(userIconAnimation, 5000)
