
function initIntro() {
  const introPage =  Handlebars.compile(pages['introSequence'])({
    username: localStorage.getItem('faceit').username  }) //get name from pouch
  clearPage('main')
  addPage('introSequence', introPage);
  showPage('introSequence');

  initIntroSequence()

  /*$('#startGame').click(function(){*/
    //clearPage('main')
    //initLevel();
  /*})*/
}
