'use strict';

<<<<<<< HEAD
function logger() {
  //check if local storage contains a token if so sync pouchdb and move to level page
  //if not prompt login

  $('#main').append(pages['landing']);
  $('#landing').show("slide", { direction: "left" }, 500);

  $('#start').click(function () {

    loginUser($('#username').val(), $('#password').val(), function (reply) {
      console.log(reply);

      if (reply === 'success') {
        console.log(JSON.parse(localStorage.getItems('faceit')).api.key);
        console.log(JSON.parse(localStorage.getItems('faceit')).api.password);

        var db = new PouchDB($('#username').val());

        db.sync(new PouchDB("https://daymos.cloudant.com/" + $('#username'), { auth: {
            username: JSON.parse(localStorage.getItem('faceit')).api.key,
            password: JSON.parse(localStorage.getItem('faceit')).api.password
          }
        })).on("complete", function (info) {
          console.log("Sync was successful", info);
        }).on('error', function (err) {
          console.log(err);
        });

        $('#main').append(Handlebars.compile(pages['intro'])({
          username: $('username').val()
        }));
        $('#landing').hide();
        $('#intro').show("slide", { direction: "left" }, 500);

        $('#startGame').click(function () {
          initGame();
          $('#intro').hide();
          $('#gamePage1').show("slide", { direction: "left" }, 500);
        });
      } else if (reply === 'wrongpassword') $('#loginReply').html('Password is not correct');else {
        $('#loginReply').html('user does not exits, click here to create it');
        $('#start').html('create user');
        $('#start').unbind();

        console.log($('#username').val());
        console.log($('#password').val());
        $('#start').click(createNewUser.bind(null, $('#username').val(), $('#password').val(), function () {
          location.reload();
        }));
      }
    });
  });
}
function attemptSync() {
  if (localStorage.getItem('faceit') === null) logger();else {
    //call to claudant with api key ini local storage to sync pouch
    //if it fails try to find instance of pouch, use it and prompt dat awas not sync
    console.log('trying to sync');
    console.log(JSON.parse(localStorage.getItem('faceit')).api.key);
    console.log(JSON.parse(localStorage.getItem('faceit')).api.password);
  }
}
$(document).ready(attemptSync);

function createNewUser(name, password, refreshPage) {
  var settings = {
    "method": "POST",
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/signup",
    "data": {
      "name": String(name),
      "password": String(password)
    }
  };

  $.ajax(settings).done(function (response) {
    localStorage.setItem('faceit', response);

    console.log(response);

    // if positive move to level page
    // else show update message in page to warn about wrong credentials
  });
  refreshPage();
}
function loginUser(name, password, callback) {
  var settings = {
    "method": "POST",
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/login",
    "data": {
      "name": String(name),
      "password": String(password)
    }
  };

  $.ajax(settings).done(function (response) {

    console.log(response);
    callback(response);
    //if response positive login
    //else prompt message to create user and attach  createuser to button 
  });
}
=======
function loader() {
  var db = new PouchDB('localDB');

  $('#main').append(pages['landing']);

  $('#landing').show("slide", { direction: "left" }, 500);
  $('#start').click(function () {
    $('#main').append(Handlebars.compile(pages['intro'])({
      username: $('#first-name').val()
    }));
    $('#landing').hide();
    $('#intro').show("slide", { direction: "left" }, 500);

    $('#startGame').click(function () {
      initGame();
      $('#intro').hide();
      $('#gamePage1').show("slide", { direction: "left" }, 500);
    });
  });
}
$(document).ready(loader);
>>>>>>> master
