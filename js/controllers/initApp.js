function logger(){
  //check if local storage contains a token if so sync pouchdb and move to level page
  //if not prompt login

  $('#main').append(pages['landing'])
  $('#landing').show("slide", { direction: "left" }, 500)

  $('#start').click(function(){
    if (validateUsername($('#username').val())) {
      $('#start').html('<img src="assets/ring.gif" id="loading-gif">')
      loginUser($('#username').val(), $('#password').val(), (reply)=>{

        if(reply.state === 'success') {
          localStorage.setItem('faceit', JSON.stringify(reply.data))

          db = new PouchDB(JSON.parse(localStorage.getItem('faceit')).username);

          db.sync(new PouchDB("https://daymos.cloudant.com/"+ $('#username').val(), { auth: {
            username: JSON.parse(localStorage.getItem('faceit')).api.key,
            password: JSON.parse(localStorage.getItem('faceit')).api.password
          }
          })).on("complete", function(info) {
            console.log("Sync was successful", info);
            initLevel()
          }).on('error', (err)=>{
            console.log(err)
          });

        } else if (reply === 'wrongpassword') $('#loginReply').html('Looks like your password isn&#39;t right, please try again')
        else {
          $('#loginReply').html('That user doesn&#39;t exist, click again to create an account')
          $('#start').html('Sign Up')
          $('#start').unbind()
          console.log($('#username').val())
          console.log($('#password').val())
          $('#start').click(createNewUser.bind(null,$('#username').val(), $('#password').val(), ()=>{location.reload()}))
        }
      })
    } else {
      alert('Username must contain only lowercase letters or numbers')
    }
  })
}

function attemptSync(){
  if( localStorage.getItem('faceit') === null) {
    logger()
  } else {

    let db = new PouchDB(JSON.parse(localStorage.getItem('faceit')).username);
    console.log('trying to sync')
    db.sync(new PouchDB("https://daymos.cloudant.com/" + JSON.parse(localStorage.getItem('faceit')).username, {
      auth: {
        username: JSON.parse(localStorage.getItem('faceit')).api.key,
        password: JSON.parse(localStorage.getItem('faceit')).api.password
      }
    })
           )
    .on('complete', function(info) {
      console.log('Sync was successful', info);
      initLevel()
    })
    .on('error', (err)=>{
      db.destroy(localStorage.getItem('faceit').username).then((res)=>{console.log(res)})
      localStorage.removeItem('faceit')
      location.reload()
      console.log('there was an error syncing', err)

    });
    console.log('trying to sync')
  }
}
$(document).ready(attemptSync)



function createNewUser(name, password, refreshPage){
  var settings = {
    "method":"POST",
    "async": true,
    "crossDomain": true,
    "url": "https://face-it.herokuapp.com/signup",
    "data": {
      "name": String(name).toLowerCase(),
      "password": String(password)
    }
  }

  $.ajax(settings).done(function (response) {
    localStorage.setItem('faceit', response)
    console.log(response);
    setTimeout(()=>{
      loginUser($('#username').val(), $('#password').val(), (reply)=>{
        localStorage.setItem('faceit', JSON.stringify(reply.data))
        db = new PouchDB(JSON.parse(localStorage.getItem('faceit')).username);

        db.sync(new PouchDB("https://daymos.cloudant.com/"+ $('#username').val(), { auth: {
          username: JSON.parse(localStorage.getItem('faceit')).api.key,
          password: JSON.parse(localStorage.getItem('faceit')).api.password
        }
        })).on("complete", function(info) {
          console.log("Sync was successful", info);
          initIntro()
        }).on('error', (err)=>{
          console.log(err)
        });
      })
    },2000);

  })
}

function loginUser(name, password, callback){
  var settings = {
    "method":"POST",
    "async": true,
    "crossDomain": true,
    "url": "https://face-it.herokuapp.com/login",
    "data": {
      "name": String(name).toLowerCase(),
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

function validateUsername(username) {
  return lowerCase(username) && shortEnough(username) && onlyLetters(username)
}

function lowerCase(username) {
  return username === username.toLowerCase();
}

function shortEnough(username) {
  return username.length < 15;
}

function onlyLetters(username) {
  return /^[a-zA-Z0-9]+$/.test(username)
}
