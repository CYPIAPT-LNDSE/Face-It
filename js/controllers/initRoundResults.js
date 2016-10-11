function initRoundResult(results, handleOnPrevious){
  $('#main').append(Handlebars.compile(pages['roundResultContainer'])({
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
  }))

  $('#gamePage'+handleOnPrevious).hide()
  $('#roundResult').show("slide", { direction: "left" }, 500)

  const emotionResults = [
    {
      type: 'happiness',
      data: [
        {"id": "user", "score": 10},
        {"id": "api", "score": 12}
      ]
    },
    {
      type: 'sadness',
      data: [
        {"id": "user", "score": 11},
        {"id": "api", "score": 17}
      ]
    },
    {
      type: 'surprise',
      data: [
        {"id": "user", "score": 14},
        {"id": "api", "score": 12}
      ]
    },

  ]

  roundResultEventListener(emotionResults)
}

function risultatone(results){
  let accumulator = 0
  results.forEach(function(el){
    if(el.userGuess === el.correctAnswer.emotion[0]) accumulator++
  })
  return String((accumulator/5)*100)
}
function roundResultEventListener(emotionResults){

  function lifeTime(){
    $('#lifeTime').click(function(){
      $('#main').append(Handlebars.compile(pages['lifeTimePage'])({
        emotions: emotionResults
      }))

      $('#roundResult').hide()
      $('#lifeTimePage').show("slide", { direction: "right" }, 500)
      emotionResults.map((el) => {
        emotionResultGraph(el.data, '#' + el.type) 
      })
      results = []
    })
  }
  function playAgain(){
    $('#playAgain1').click(function(){
      $('#roundResult').hide()
      $('#landing').show("slide", { direction: "right" }, 500)
      results = []
    })
  }

  lifeTime();
  playAgain();
}
