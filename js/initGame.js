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
    $('#'+ el).find('#image').attr('src', 'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg' )
    console.log($('#'+ el).find('img').attr('src'))
  }) 
  //apply correct emoticons
}

function runInit(){
    let gameSet = generateGameSet(images)
    renderHiddenDivs()
    applyGameSetToHiddenDivs(gameSet)
}

function detectCorrectAnswer(){

}
