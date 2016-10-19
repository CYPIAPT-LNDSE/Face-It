let results  = [],
  userLevel,
  db;


function updateLevel(){
  db = new PouchDB(JSON.parse(localStorage.getItem('faceit')).username);
  db.get('userLevel').then(function (doc) {
    console.log('doc is', doc)
    userLevel = doc.currentLevel
  }).catch(function (err) {
    console.log(err);
  });
}
