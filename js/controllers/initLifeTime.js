
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
  lifeTime(emotionResults)
  lifeTimeEventListener()

}

function lifeTimeEventListener(){
  $('#roundResults2').click(function(){
    initRoundResult(results);
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
    workOn: workOn
  })
  clearPage('main')
  addPage('lifeTimePage', lifeTimePage)
  showPage('lifeTimePage')

  // add lifetime graph function here
  if (!$('#lifetime-results-page__lifetime-graph').find('svg').length) {  
    db.get('historical').then((doc)=>{
      console.log(doc)
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

