function initGame(){
  let gameSet = generateGameSet(images)
  gameSet = generateWrongAnswerData(gameSet)
  renderHiddenDivs()
  applyGameSetToHiddenDivs(gameSet)
  applyEmojiL(gameSet)
  applyEmojiR(gameSet)
  eventListenerGamePage(gameSet)
  $('#main').append(pages['roundResult'])
  initPageResult(gameSet)
  console.log(gameSet)
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

function initPageResult(gameSet){

  [1,2,3,4,5].forEach(function(el, i){
    $('#res'+ el).find('img').attr('src', 'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg' )
  })
}

function generateWrongAnswerData(gameSet){
  return gameSet.map(function(el, index){
    el.wrongAnswer = {
      emotion:getOtherEmotion(el.correctAnswer['emotion'][0]),
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

function applyEmojiL(gameSet){
  ['gamePage1','gamePage2','gamePage3','gamePage4', 'gamePage5'].forEach(function(el,i){
    console.log(gameSet[i].correctAnswer.emojiPath)
    $('#'+ el).find('#choiceL').attr('src',String(gameSet[i].correctAnswer.emojiPath))
    $('#'+ el).find('#buttonL').html(gameSet[i].correctAnswer.emotion[0])
  })
}
function applyEmojiR(gameSet){
  ['gamePage1','gamePage2','gamePage3','gamePage4', 'gamePage5'].forEach(function(el,i){
    console.log(gameSet[i].correctAnswer.emojiPath)
    $('#'+ el).find('#choiceR').attr('src',String(gameSet[i].wrongAnswer.emojiPath))
    $('#'+ el).find('#buttonR').html(gameSet[i].wrongAnswer.emotion)
  })
}
function emojiPath(emotion){
  let dict = {
    'anger':'angry-emoji.svg', 'sadness':'sad-emoji.svg', 'surprise':'surprise-emoji.svg', 'neutral':'neutral-emoji.svg', 'happiness':'happy-emoji.svg'}
  return dict[emotion]
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
        console.log(results)
        $('#gamePage'+el).hide()
        $('#roundResult').show("slide", { direction: "left" }, 500)
      })
    }
  })
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
