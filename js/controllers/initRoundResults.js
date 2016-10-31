let roundComplete = 0;

function initRoundResult(results){

  //here store round result into pouch 
  // see data samples in initLifeTime

  db.get('historical').then(function(doc) {
    console.log(doc.historical)
    return db.put({
      _id: 'historical',
      _rev: doc._rev,
      historical:doc.historical.concat({
        date: Date.now(),
        score: risultatone(results)
      })
    });
  }).then(function(response) {
    // handle response
    console.log('pushing historica object', response)
  }).catch(function (err) {
    console.log(err);
  });

  //here update the user level in pouch

  db.get('userLevel').then(function(doc) {
    return db.put({
      _id: 'userLevel',
      _rev: doc._rev,
      userLevel: Number(doc.userLevel) + 0.2
    });
  }).then(function(response) {
    console.log('moved on  by a bit in this level')
  }).catch(function (err) {
    console.log(err);
  });
  roundComplete = 1;
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
    updateLevel()
    initLevel();
    results = [];
  })
}

