function initRoundResult(results, handleOnPrevious){
  const resultsPage = Handlebars.compile(pages['roundResultContainer'])({
    roundAnswers: results.reduce((acc, current, i)=>{
      return acc + Handlebars.compile(pages['roundAnswer'])({
        //here populate single answer stuff 
        userResult: current.userGuess,
        apiConfidanceValue: ~~(current.apiGuess[1]*100),
        apiEmotion: current.apiGuess[0],
        imagePath:'assets/imgs/' + Object.keys(results[i])[0]+ '.jpg'
      })
    },''),
    risultatone:risultatone(results)
  })

  addPage('roundResult', resultsPage)
  showPage('roundResult');

  roundResultEventListener()
}

function risultatone(results){
  let accumulator = 0
  results.forEach(function(el){
    if(el.userGuess === el.correctAnswer.emotion[0]) accumulator++
  })
  return String((accumulator/5)*100)
}

function roundResultEventListener(){
  $('#lifeTime').click(function(){
    initLifeTime();
  })

  $('#playAgain1').click(function(){
    playAgain();
  })
}

function playAgain(){
  $('#roundResult').hide()
  $('#landing').show("slide", { direction: "right" }, 500)
  results = []
}

