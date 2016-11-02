function initIntroSequence(){
  function gearSpin() {
    $('.gear').rotate({duration: 11000, angle: 0, animateTo: 180})

    $('.gear-reverse').rotate({duration: 11000, angle: 0, animateTo: -180})
  }
  function surpriseIconAnimation() {
    $("#surprise-icon")
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
    $("#sad-icon")
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
    $("#user-icon")
    // Fall down
      .velocity({translateX:[10,11], translateY:[219, 60]}, 800, [0.33, 0, 0.66, 0.33])
      .velocity({translateY:216}, 100, [0.33, 0, 0.66, 1])
      .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
      .velocity({translateY:218}, 100, [0.33, 0, 0.66, 1])
      .velocity({translateY:219}, 80, [0.33, 0, 0.66, 1])
    // Scale, hide conveyer belts, and display speech bubble
      $("#user-icon")
        .velocity({scale: "400%"}, {delay: 400, duration: 800, begin: function() {
          $("#conveyer-group").velocity({opacity: 0})
          $(".intro-page__speech-bubble").velocity({opacity: 1}, {delay: 2000, display: "block", complete: function() {
            speechBubbleText()
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

  function speechBubbleText() {
    $(document).on("click", function() {
      var speechBubble = $(".intro-page__speech-bubble");
      switch (true) {
        case $(speechBubble).hasClass("intro-page__speech-bubble--1"):
          $(".speech-bubble__text").text("I was built to recognise emotions")
        $(speechBubble).switchClass("intro-page__speech-bubble--1", "intro-page__speech-bubble--2")
        break;
      case $(speechBubble).hasClass("intro-page__speech-bubble--2"):
        $(".speech-bubble__text").text("But I need some practice before I'm ready to leave the factory")
      $(speechBubble).switchClass("intro-page__speech-bubble--2", "intro-page__speech-bubble--3")
      break;
    case $(speechBubble).hasClass("intro-page__speech-bubble--3"):
      $(".speech-bubble__text").text("Can you help me practice recognising emotions?")
    $(speechBubble).switchClass("intro-page__speech-bubble--3", "intro-page__speech-bubble--4")
    break;
  case $(speechBubble).hasClass("intro-page__speech-bubble--4"):
    $(document).off();
  $(speechBubble).switchClass("intro-page__speech-bubble--4", "intro-page__speech-bubble--5")
  tutorialFace()
  break
case $(speechBubble).hasClass("intro-page__speech-bubble--5"):
  $(".speech-bubble__text").text("Play enough rounds, and I will level up!")
$(speechBubble).switchClass("intro-page__speech-bubble--5", "intro-page__speech-bubble--6")
break
      case $(speechBubble).hasClass("intro-page__speech-bubble--6"):
        $(".speech-bubble__text").text("Help me level up and travel through the factory")
      $(speechBubble).switchClass("intro-page__speech-bubble--6", "intro-page__speech-bubble--7")
      break
    case $(speechBubble).hasClass("intro-page__speech-bubble--7"):
      $(".speech-bubble__text").velocity({opacity: 0}, {complete: function() {
      $(".speech-bubble__text").velocity({"font-size": "1.8em"})
      $(".speech-bubble__text").text("Let's go!")
      $(".speech-bubble__text").velocity({opacity: 1})
    }})
    $(speechBubble).removeClass("intro-page__speech-bubble--7")
    introToLevelPage()
    break
      }
    })
  }

  function tutorialFace() {
    $(".intro-page__speech-bubble").velocity({opacity: 0}, {display: "none"})
    $("svg").velocity({opacity: 0}, {display: "none"})
    $(".intro-page__tutorial").show();
    setTimeout(function() {
      $(".intro-page__tutorial-button").velocity({opacity: 0.3}, {display: "block", duration: 800})
      $(".game-page__image-container--intro").velocity({opacity: 1}, {display:"block", duration: 800, queue: false, complete: function() {
        $(".intro-page__modal").velocity({opacity: 1}, {delay: 200, duration: 800})
        tutorialButtons()
      }})
    }, 400)
  }

  function tutorialButtons() {
    $(document).on("click", function() {
      $(".game-page__image-container--intro").velocity({opacity: 0.3}, {duration: 1000})
      $(".intro-page__modal").switchClass("intro-page__modal--top-triangle", "intro-page__modal--bottom-triangle")
      $(".modal__text").velocity({opacity: 0}, {complete: function() {
        $(".modal__text").text("Tap on which emotion you think it is showing")
        $(".modal__text").velocity({opacity: 1})
      }})
      $(".intro-page__tutorial-button").velocity({opacity: 1}, {duration: 1000, delay: 300})
      $(document).off()
      tutorialtoSpeechBubble()
    })
  }

  function tutorialtoSpeechBubble() {
    $(".intro-page__tutorial-button").on("click", function() {
      $(".speech-bubble__text").text("After five faces, I'll show you what I thought")
      $(".intro-page__tutorial").velocity({opacity: 0}, {duration: 800, display: "none"})
      $("svg").velocity({opacity: 1}, {display: "block", duration: 600, delay: 400})
      $(".intro-page__speech-bubble").velocity({opacity: 1}, {display: "block", duration: 600, delay: 800})
      $(".intro-page__tutorial-button").off()
      speechBubbleText()
    })
  }

  function introToLevelPage() {
    $(document).on("click", function() {
      console.log("level page")
      initLevel()     
      $(document).off();
    })
  }

  gearSpin()
  surpriseIconAnimation()
  setTimeout(sadIconAnimation, 2500)
  setTimeout(userIconAnimation, 5000)
}
