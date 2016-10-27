
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
      {"id": "user", "score": 11},
      {"id": "api", "score": 12}
    ]
  },
]

function initLifeTime(){
  db.get('partials').then((doc)=>{
    console.log(doc)
    //lifeTime(doc.partials)
    lifeTime(emotionResults)
    lifeTimeEventListener()
  })
}

function lifeTimeEventListener(){
  $('#roundResults2').click(function(){
    const resultsPage = Handlebars.compile(pages['roundResultContainer'])({
      roundAnswers: results.reduce((acc, current, i)=>{
        return acc + Handlebars.compile(pages['roundAnswer'])({
          userResult: current.userGuess,
          apiConfidanceValue: ~~(current.apiGuess[1]*100),
          apiEmotion: current.apiGuess[0],
          imagePath:'assets/imgs/' + Object.keys(results[i])[0]+ '.jpg'
        })
      },''),
      risultatone:risultatone(results)
    })
    clearPage('main')
    addPage('roundResult', resultsPage)
    showPage('roundResult');
    roundResultEventListener()
  })
  $('#playAgain2').click(function(){
    initLevel();
    results = []
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
  const lifeTimePage = Handlebars.compile(pages['lifeTimePage'])({
    emotions: emotionResults,
    workOn: workOn,
    roundResults: roundComplete === 1 ? true : false 
  })
  clearPage('main')
  addPage('lifeTimePage', lifeTimePage)
  showPage('lifeTimePage')

  // add lifetime graph function here
  if (!$('#lifetime-results-page__lifetime-graph').find('svg').length) {  
    db.get('historical').then((doc)=>{
      console.log('hi im doc' ,doc)
      //for (var x = 1; x < 10; x++) {
      //doc.historical.push({
      //  count: 1,
      //  date: Date.now() + (1000 * 60 * 60 * 24 * x),
      //  dayScore: '80',
      //  score: '80',
      //})
      //}
      lifeTimeResults(doc.historical)
    })
  }

  if (!$('.emotion').find('svg').length) {
    const total = totalQuestions(emotionResults)
    emotionResults.map((el) => {
      emotionResultGraphPercent(total, el.data, '#' + el.type)
    })
  }
}

