function loader(){
  $('#main').append(pages['landing'])
  $('#main').append(pages['intro'])
  $('#main').append(pages['navigator'])

  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    let userName = $('#first-name').val();
    $('#userName').text('Hi ' + userName);
    $('#landing').hide()
    $('#intro').show("slide", { direction: "left" }, 500)
  })

  $('#continue_button').click(function(){
    initGame()
    $('#intro').hide()
    var $nav = $('#navigator').hide();
    $('#navigator').show("slide", { direction: "left" }, 500) //sliding does not work
  })

  $('#start_game_button').click(function(){
    $('#navigator').hide()
    $('#gamePage1').show("slide", { direction: "left" }, 500)
  })

  $('#lifetime_results_button').click(function(){
    $('#navigator').hide()
    $('#lifeTimePage').show("slide", { direction: "left" }, 500)
  })

}

$(document).ready(loader)
