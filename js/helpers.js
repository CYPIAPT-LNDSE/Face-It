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

function generateGameSet(){
  //populate a gameset []
}


function instanceImageObj(){
// generate new object from images in db, new property to record uses guess
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



