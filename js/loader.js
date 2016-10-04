function loader(){
  $('#main').append(pages['landing'])

  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    $('#main').append(Handlebars.compile(pages['intro'])({
      username:$('#first-name').val()
    }))

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
