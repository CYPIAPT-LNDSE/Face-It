function initApp(){
  $('#main').append(pages['landing'])
  $('#main').append(pages['intro'])
  $('#main').append(pages['roundResults'])


  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    $('#landing').hide()
    $('#intro').show("slide", { direction: "left" }, 500) 
  })

  $('#introStart').click(function(){
    initGame()
    $('#intro').hide()
    $('#gamePage1').show("slide", { direction: "left" }, 500)
  })
  for(var el = 1;el<6;el++){
    if(el<5){
      console.log($('#gamePage'+ el).find('button'))
      $('#gamePage'+ el).find('button').click(function(){
        $('#gamePage'+el).hide()
        $('#gamePage'+el+1).show("slide", { direction: "left" }, 500)
      }) 
    } else{
    $('#gamePage'+ el).find('button').click(function(){
        $('#gamePage'+el).hide()
        $('#roundResults').show("slide", { direction: "left" }, 500)
    })
  }
  }
}

$(document).ready(initApp)
