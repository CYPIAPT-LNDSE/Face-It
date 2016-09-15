function initGame(){
  let gameSet = generateGameSet(images)
  renderHiddenDivs()
  applyGameSetToHiddenDivs(gameSet)
  eventListenerGamePage()
}

//helpers
function generateGameSet(images, username = 'john doe'){
  return randomiser(images).map(function(el, i, array){
    return {
      [el]:images[el][0],
      userGuess:'noresponse',
      username:username
    }
  })
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
    console.log($('#'+ el).find('img').attr('src'))
  }) 
  //apply correct emoticons
}

function detectCorrectAnswer(img){
  let dict = {
    'angry':'angry-emoji.svg', 'sad':'sad-emoji.svg', 'surprise':'surprise-emoji.svg', 'neutral':'neutral-emoji.svg', 'happy':'happy-emoji.svg'}

}
function eventListenerGamePage(){
  [1,2,3,4,5].forEach(function(el){
    if(el<5){
      $('#gamePage'+ el).find('button').click(function(){
        console.log('#gamePage'+(el+1))
        $('#gamePage'+el).hide()
        $('#gamePage'+(Number(el)+1)).show("slide", { direction: "left" }, 500)
      }) 
    } else{
      $('#gamePage'+ el).find('button').click(function(){
        $('#gamePage'+el).hide()
        $('#roundResult').show("slide", { direction: "left" }, 500)
      })
    }
  })
}
