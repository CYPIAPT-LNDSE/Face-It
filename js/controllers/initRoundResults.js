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
      properType: 'Happiness',
      data: [
        {"id": "user", "score": 10},
        {"id": "api", "score": 12}
      ]
    },
    {
      type: 'sadness',
      properType: 'Sadness',
      data: [
        {"id": "user", "score": 11},
        {"id": "api", "score": 17}
      ]
    },
    {
      type: 'surprise',
      properType: 'Surprise',
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
  $('#lifeTime').click(function(){
    lifeTime(emotionResults);
  })


  $('#playAgain1').click(function(){
    playAgain();
  })
}

function totalQuestions(results) {
  return results.reduce((acc, el) => {
    return acc + el.data[0].score;
  }, 0)
} 

function significantDifference([user, api], bound) {
  return Math.abs(user.score - api.score) / api.score >= bound;
}

function emotionsToWorkOn(results, bound) {
  return results.reduce((acc, el) =>  {
    return significantDifference(el.data, bound) ? acc.concat(el.type) : acc;
  },[])
}

function lifeTime(emotionResults){

  const workOn = emotionsToWorkOn(emotionResults, 0.2)
  $('#main').append(Handlebars.compile(pages['lifeTimePage'])({
    emotions: emotionResults,
    workOn: workOn
  }))

  const total = totalQuestions(emotionResults)

  console.log(workOn)

  $('#roundResult').hide()
  $('#lifeTimePage').show("slide", { direction: "right" }, 500)
  
  // add lifetime graph function here

  emotionResults.map((el) => {
    emotionResultGraph(total, el.data, '#' + el.type) 
  })
  results = []
}

function playAgain(){
  $('#roundResult').hide()
  $('#landing').show("slide", { direction: "right" }, 500)
  results = []
}

