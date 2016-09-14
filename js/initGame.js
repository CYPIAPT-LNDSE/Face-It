function generateGameSet(images){
  return randomiser(images).map(function(el, i, array){
    return {
      [el]:images[el][0],
      userGuess:'noresponse'
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

function generateSingleGamePage(){
  //generate single div of game
}


