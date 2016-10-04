function roundResults(){
  $('#roundResults').click(function(){
    $('#lifeTimePage').hide()
    $('#roundResult').show("slide", { direction: "right" }, 500)
    results = []
  })
}
function lifeTime(){
  $('#lifeTime').click(function(){
    $('#roundResult').hide()
    $('#lifeTimePage').show("slide", { direction: "right" }, 500)
    results = []
  })
}
function playAgain(){
  $('#playAgain1').click(function(){
    $('#roundResult').hide()
    $('#landing').show("slide", { direction: "right" }, 500)
    results = []
  })
  $('#playAgain2').click(function(){
    $('#lifeTimePage').hide()
    $('#landing').show("slide", { direction: "right" }, 500)
    results = []
  })
}

function eventListenerGamePage(gameSet){
  [1,2,3,4,5].forEach(function(el,i){
    if(el<5){
      $('#gamePage'+ el).find('button').click(function(){
        $('#gamePage'+el).hide()
        $('#gamePage'+(Number(el)+1)).show("slide", { direction: "left" }, 500)
        gameSet[i].userGuess = $(this)[0].innerHTML
        results.push(gameSet[i])
      })
    } else{
      $('#gamePage'+ el).find('button').click(function(){
        gameSet[i].userGuess = $(this)[0].innerHTML
        results.push(gameSet[i])
        $('#gamePage'+el).hide()
        $('#roundResult').show("slide", { direction: "left" }, 500)
        updateResultPage(results)
      })
    }
  })
}
