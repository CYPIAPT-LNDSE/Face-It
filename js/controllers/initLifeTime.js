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

const totalRoundResults = [
  {
    "date": "1475766444306",
    "score": 50
  },
  {
    "date": "1475794800000",
    "score": 57
  },
  {
    "date": "1475881200000",
    "score": 62
  },
  {
    "date": "1475967600000",
    "score": 58
  },
  {
    "date": "1476054000000",
    "score": 60
  },
  {
    "date": "1476140400000",
    "score": 62
  }
];

function initLifeTime(){
  lifeTime(emotionResults)
  lifeTimeEventListener()

}

function lifeTimeEventListener(){
  $('#roundResults2').click(function(){
    initRoundResult(results);
  })
  $('#playAgain2').click(function(){
    initIntro();
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
    lifeTimeResults(totalRoundResults)
  }

  if (!$('.emotion').find('svg').length) {
    const total = totalQuestions(emotionResults)
    emotionResults.map((el) => {
      emotionResultGraphPercent(total, el.data, '#' + el.type)
    })
  }
}

