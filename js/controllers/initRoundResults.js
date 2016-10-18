
function initRoundResult(results){
  console.log(db)

  //here update pouch with the results

  db.put({
    _id: String(userLevel),
    results: results
  }).then(function (response) {
    // handle response
    console.log('updated pouch with last results')
  }).catch(function (err) {
    console.log(err);
  });

  //here update the user level in pouch
  //problem here updating
  db.get('userLevel').then(function(doc) {//error here
    return db.put({
      _id: 'userLevel',
      _rev: doc._rev,
      userLevel: Number(doc.currentLevel) + 0.2
    });
  }).then(function(response) {
    // handle response
    
    console.log(response)
    console.log('moved on  by a bit in this level')
  }).catch(function (err) {
    console.log(err);
  });



  console.log(results)
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

