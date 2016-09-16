function initApp(){

  $('#main').append(pages['landing'])
  $('#main').append(pages['intro'])


  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    let userName = $('#first-name').val();
    console.log(userName);
    $('#userName').text('Hi ' + userName);
    console.log($('#userName').html());
    $('#landing').hide()
    $('#intro').show("slide", { direction: "left" }, 500)
  })

  $('#introStart').click(function(){
    initGame()
    $('#intro').hide()
    $('#gamePage1').show("slide", { direction: "left" }, 500)
  })
}

$(document).ready(initApp)
