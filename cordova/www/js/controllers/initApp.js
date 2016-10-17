'use strict';

function loader() {
  //check if local storage contains a token if so sync pouchdb and move to level page
  //if not prompt login

  $('#main').append(pages['landing']);
  $('#landing').show("slide", { direction: "left" }, 500);

  $('#start').click(function () {
    loginUser($('username').val(), $('password').val(), function (reply) {

      console.log(reply);

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
    });
    // here process login/signup

  });
}
$(document).ready(loader);

function createNewUser(name, password, callback) {
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

    console.log(JSON.parse(response));
    callback(response);

    // if positive move to level page
    // else show update message in page to warn about wrong credentials
  });
}
function loginUser(name, password) {
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

    //if response positive login
    //else prompt message to create user and attach  createuser to button 
  });
}
