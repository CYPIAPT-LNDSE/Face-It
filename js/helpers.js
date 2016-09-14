function hideOnRight(elementToHide){
  let id = '#'+ elementToHide
  return function(){
    $(id).click(function () {
      $('#tests1').hide("slide", { direction: "right" }, 1000);
    })
  }
}

function showFromLeft(elementToShow){
  let id = '#'+ elementToShow
  return function(){
    $(id).click(function () {
      $('#tests1').show("slide", { direction: "right" }, 1000);
    })
  }
}

function generateGameSet(images){
  //populate a gameset []
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

function instanceImageObj(obj){
  // generate new object from images in db, new property to record uses guess
  return obj.userGuess = 'noresponse'
}

function generateGameDOMElements(gameset){
  //generate all pages of the game
  //return 
}

function generateSingleGamePage(){
  //generate single div of game
}

function measureOutOfView(){
  //return position where to place the hidden dom elements
}


function renderElements(hiddenXRef){
  //render elemets out of view
}



