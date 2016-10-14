function loader(){
  const db = new PouchDB('localDB')
  initLandingPage();
}

function initLandingPage() {
  addPage('landing', pages['landing']);
  showPage('landing')
  
  $('#start').click(function(){
    const introPage =  Handlebars.compile(pages['intro'])({
      username:$('#first-name').val()
    })
    clearPage('main')
    addPage('intro', introPage);
    showPage('intro');

    $('#startGame').click(function(){
      clearPage('main')
      initGame();
      showPage('gamePage1');
    })
  })
}
$(document).ready(loader)
