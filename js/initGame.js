function initGame(){
  $('#main').append(pages['roundResult'])
  $('#main').append(pages['lifeTimeResults'])

  let gameSet = generateGameSet(images)
  gameSet = generateWrongAnswerData(gameSet)
  renderHiddenDivs()
  applyGameSetToHiddenDivs(gameSet)
  applyEmoji(gameSet)
  initPageResult(gameSet)
  eventListenerGamePage(gameSet)
  playAgain()
  lifeTime()
  roundResults()
}
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
      $('#roundResult').hide()
      $('#landing').show("slide", { direction: "right" }, 500)
      results = []
    })
}
function randomiser2(){
  let dict = ['correctAnswer', 'wrongAnswer']
  if(Math.random() > 0.5) {return dict}
  else{ 
    return [dict[1], dict[0]] 
  }

}
//helpers
function generateGameSet(images, username = 'john doe'){
  return randomiser(images).map(function(el, i, array){
    return {
      [el]:images[el][0],
      userGuess:'noresponse',
      username:username,
      apiGuess:apiWinner(images[el][0]['scores']),
      correctAnswer:{
        emotion:apiWinner(images[el][0]['scores']),
        emojiPath: 'assets/icons/' + emojiPath(apiWinner(images[el][0]['scores'])[0])
      }
    }
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

function updateResultPage(results){
  results.forEach(function(el,i){
    $('#res'+ (i+1)).find('p:nth-child(1)').text('You guessed this face shows ' + el.userGuess)
    $('#res'+ (i+1)).find('p:nth-child(2)').text('Microsoft is '+ ~~(el.apiGuess[1]*100) + '% sure it was ' + el.apiGuess[0])
  })
  $('#risultatone').find('h2').text('You agreed with our emotion algorithm ' + risultatone(results)+'%')

}

function risultatone(results){
  let accumulator = 0
  results.forEach(function(el){
    console.log(el.userGuess, el.correctAnswer.emotion[0])
    if(el.userGuess=== el.correctAnswer.emotion[0]) accumulator++
  })
  console.log(String((accumulator/5)*100))
  return String((accumulator/5)*100)
}

function initPageResult(gameSet){
  [1,2,3,4,5].forEach(function(el, i){
    $('#res'+ el).find('img').attr('src', 'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg' )
  })
}

function generateWrongAnswerData(gameSet){
  return gameSet.map(function(el, index){
    el.wrongAnswer = {
      emotion:[getOtherEmotion(el.correctAnswer['emotion'][0])],
      emojiPath:'assets/icons/' + emojiPath(getOtherEmotion(el.correctAnswer['emotion'][0]))
    }
    return el
  })
}

function getOtherEmotion(emotion, pos){
  let emotions = ['happiness', 'sadness', 'anger', 'neutral','surprise']
  emotions.splice(emotions.indexOf(emotion), 1)
  return emotions[2]

  function randomNumber(){
    return ~~(Math.random()*5) 
  }
}

function randomiser(images){
  return Object.keys(images).sort(function(){return .5 - Math.random()}).slice(0, 5)
}

function renderHiddenDivs(){
  [1,2,3,4,5].forEach(function(el){
    $('#main').append(pages['gamePage'])
    $('#fresh').attr('id', 'gamePage' + el)
  })

}
function applyGameSetToHiddenDivs(gameSet){

  //apply correct images and emoticons to each hidden div
  ['gamePage1','gamePage2','gamePage3','gamePage4', 'gamePage5'].forEach(function(el, i, array){
    $('#'+ el).find('#biggie').attr('src', 'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg' )
  })
}

function applyEmoji(gameSet){
  ['gamePage1','gamePage2','gamePage3','gamePage4', 'gamePage5'].forEach(function(el,i){
    let random = randomiser2()
    meh(random)
    function meh(answerType){
      console.log(answerType)
      $('#'+ el).find('#choiceL').attr('src',String(gameSet[i][answerType[0]].emojiPath))
      $('#'+ el).find('#buttonL').html(gameSet[i][answerType[0]].emotion[0])

      $('#'+ el).find('#choiceR').attr('src', String(gameSet[i][answerType[1]].emojiPath))
      $('#'+ el).find('#buttonR').html(gameSet[i][answerType[1]].emotion[0])
    }
  })
}

function emojiPath(emotion){
  let dict = {
    'anger':'angry-emoji.svg', 'sadness':'sad-emoji.svg', 'surprise':'surprise-emoji.svg', 'neutral':'neutral-emoji.svg', 'happiness':'happy-emoji.svg'}
  return dict[emotion]
}

function apiWinner(scores) {
  let tempNumber = 0;
  let emotion;
  for(prop in scores){
    if(scores[prop] > tempNumber && String(scores[prop]).includes('-') === false){
      tempNumber = scores[prop];
      emotion = prop;
    }
  }
  return [emotion, tempNumber];
}

let dictionary = {
  happiness:'happy-emoji.svg',
  sadness:'sad-emoji.svg',
  neutral:'neutral-emoji.svg',
  surprise:'surprise-emoji.svg',
  anger:'angry-emoji.svg'
}
