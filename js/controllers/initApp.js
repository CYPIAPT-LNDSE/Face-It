function loader(){
  const db = new PouchDB('localDB')
  initLandingPage();
}

function initLandingPage() {
  addPage('landing', pages['landing']);
  showPage('landing')
  startButtonEventListener();
}

function startButtonEventListener() {
  $('#start').click(function(){
    initIntro();
  })
}

$(document).ready(loader)
