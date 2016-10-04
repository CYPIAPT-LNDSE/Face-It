function loader(){
  $('#main').append(pages['landing'])
  $('#main').append(pages['intro'])

  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    let userName = $('#first-name').val();
    $('#userName').text('Hi ' + userName);
    $('#landing').hide()
    $('#intro').show("slide", { direction: "left" }, 500)
  })

  $('#introStart').click(function(){
    initGame()
    $('#intro').hide()
    $('#gamePage1').show("slide", { direction: "left" }, 500)
  })
}

$(document).ready(loader)
