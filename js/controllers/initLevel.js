function initLevel() {
  const levelPage = Handlebars.compile(pages['levelPage'])({})
  clearPage('main');
  addPage('level', levelPage);
  showPage('level');

  $('#play').click(function(){
    initGame();
  });
  $('#lifeTimeResults').click(function(){
    initLifeTime(); 
  })
}
