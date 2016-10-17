function logger(){
  //check if local storage contains a token if so sync pouchdb and move to level page
  //if not prompt login

  $('#main').append(pages['landing'])
  $('#landing').show("slide", { direction: "left" }, 500)

  $('#start').click(function(){

    loginUser($('username').val(), $('password').val(), (reply)=>{
      console.log(reply)

      if(reply === 'success') {

        var db = new PouchDB($('username').val());

        db.sync(new PouchDB("https://daymos.cloudant.com/"+ $('username'), { auth: {
          username: localStorage.getItems('faceit').
          password: "somerandomapipassword", }
        })).on("complete", function(info) {
          console.log("Sync was successful", info);  });

          $('#main').append(Handlebars.compile(pages['intro'])({
            username:$('username').val()
          }))
          $('#landing').hide()
          $('#intro').show("slide", { direction: "left" }, 500)

          $('#startGame').click(function(){
            initGame()
            $('#intro').hide()
            $('#gamePage1').show("slide", { direction: "left" }, 500)
          })
      }
      else if (reply === 'wrongpassword') $('#loginReply').html('Password is not correct')
      else {
        $('#loginReply').html('user does not exits, click here to create it')
        $('#start').html('create user')

        $('#start').click(createNewUser($('username').val(), $('password').val(), (apikey)=>{
          localStorage.set('faceit', JSON.stringify(apikey)) 
        })) 
      }
    }) 


  })
}
function attemptSync(){
  if( localStorage.getItem('faceit') === null) logger()
  else {
    //call to claudant with api key ini local storage to sync pouch
    //if it fails try to find instance of pouch, use it and prompt dat awas not sync
    console.log('trying to sync') 
  }
}
$(document).ready(attemptSync)



function createNewUser(name, password, callback){
  var settings = {
    "method":"POST",
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/signup",
    "data": {
      "name": String(name),
      "password": String(password)
    }
  }

  $.ajax(settings).done(function (response) {
    localStorage.setItem('faceit', response)

    console.log(JSON.parse(response));
    callback(response)

    // if positive move to level page
    // else show update message in page to warn about wrong credentials

  });
}
function loginUser(name, password, callback){
  var settings = {
    "method":"POST",
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/login",
    "data": {
      "name": String(name),
      "password": String(password)
    }
  }

  $.ajax(settings).done(function (response) {

    console.log(response);
    callback(response)
    //if response positive login
    //else prompt message to create user and attach  createuser to button 
  });
}
