function loader(){

const db = new PouchDB('localDB')

  $('#main').append(pages['landing'])

  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    const introPage =  Handlebars.compile(pages['intro'])({
      username:$('#first-name').val()
    })
    addPage('intro', introPage);
    showPage('intro');

    $('#startGame').click(function(){
      initGame();
      showPage('gamePage1');
    })
  })
}
$(document).ready(loader)
