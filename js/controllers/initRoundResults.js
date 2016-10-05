function initRoundResult(results,handleOnPrevious){
  $('#main').append(Handlebars.compile(pages['roundResult'])({
    }))
  $('#gamePage'+handleOnPrevious).hide()
  $('roundResult').show()

  updateResultPage(results)
  roundResultEventListener()

}

function updateResultPage(results){
  results.forEach(function(el,i){
    $('#res'+ (i+1)).find('p:nth-child(1)').text('You said this face shows ' + el.userGuess)
    $('#res'+ (i+1)).find('p:nth-child(2)').text('Emotion API was '+ ~~(el.apiGuess[1]*100) + '% sure it was ' + el.apiGuess[0])
  })
  $('#risultatone').find('h2').text('You agreed with Emotion API ' + risultatone(results)+'% of the time')
}

function risultatone(results){
  let accumulator = 0
  results.forEach(function(el){
    if(el.userGuess === el.correctAnswer.emotion[0]) accumulator++
  })
  return String((accumulator/5)*100)
}
function roundResultEventListener(){

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
}
