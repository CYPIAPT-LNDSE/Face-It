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
