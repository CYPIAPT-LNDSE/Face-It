let pages = {
  'landing':`<div class="landing-page" id='landing' style='display:none;'>
  <div class="col-xs-10 col-xs-offset-1">
  <div class="landing-page__header">
  <img src="assets/icons/logo.svg" alt="" class="img-responsive landing-page__logo">
  <h1>An App</h1>
  </div>
  <form>
  <div class="form-group">
  <label class="name-form" for="first-name">What's Your First Name?</label>
  <input type="text" class="form-control" id="first-name" placeholder="Emma">
  </div>
  </form>
  <button type="button" class="btn btn-default btn-lg btn-block" id="start">Start</button>
  </div>
  </div> `,
  'intro':`<div class="intro-page" style='display:none;' id='intro'>
          <div class="col-xs-12">
            <div class="intro-page__explanation">
              <h1 id='userName'>Hi, {{USER}}!</h1>
              <p>{{APP NAME}} is a game about recognising emotions.</p>
              <hr>
              <p class="intro-page__explanation-p-margin">It's based on a computer programme called Emotion API.</p>
              <p>Emotion API can detect emotions in photos.</p>
              <hr>
              <p class="intro-page__explanation-p-margin">We're going to show you a photo of a face and two emotions to choose from.</p>
              <p>Pick which emotion you're most sure the face is expressing.</p>
              <hr>
              <p class="intro-page__explanation-p-margin">After five faces, we'll compare your choices to Emotion API's!</p>
            </div>
            <button type="button" class="btn btn-default btn-lg btn-block" id='introStart'>Start</button>
          </div>

        </div>
`,
  'gamePage':`<div class="game-page" id='fresh' style='display:none;'>
  <div class="game-page-content">
  <div class="col-xs-12 game-page__image-container">
  <img src="assets/imgs/a921004_1920.jpg" class="img-responsive" alt="Face" id='biggie'>
  </div>
  <div class="col-xs-6 game-page__button">
  <img src="assets/icons/happy-emoji.svg" class="game-page__button-emoji" alt="Happy" id='choiceL'>
  <button type="button" class="btn btn-default btn-lg btn-block" id='buttonL'>Happy</button>
  </div>
  <div class="col-xs-6 game-button">
  <img src="assets/icons/sad-emoji.svg" class="game-page__button-emoji" alt="Sad" id='choiceR'>
  <button type="button" class="btn btn-default btn-lg btn-block" id="buttonR">Sad</button>
  </div>
  </div>
  </div>`,
  'roundResult':`<div class="round-results-page" style="display:none" id='roundResult'>
  <div class="round-results-page__header">
  <h1>Results this round:</h1>
  </div>
  <hr>
  <div class="col-xs-10 col-xs-offset-1 round-results-page__result-container">
  <div class="round-results-page__result" id='res1'>
  <img src="assets/imgs/a921004_1920.jpg" class="img-responsive round-results-page__result-img" alt="Face" >
  <div class="round-results-page__result-text">
  <p>You said the face was {{result}}</p>
  <p>Emotion API was {{#}}% sure it was {{emotion}}</p>
  </div>
  </div>
  <div class="round-results-page__result" id='res2'>
  <img src="assets/imgs/h187696_1920.jpg" class="img-responsive round-results-page__result-img" alt="Face">
  <div class="round-results-page__result-text">
  <p>You said the face was {{result}}</p>
  <p>Emotion API was {{#}}% sure it was {{emotion}}</p>
  </div>
  </div>
  <div class="round-results-page__result" id='res3' >
  <img src="assets/imgs/su211505_1280.jpg" class="img-responsive round-results-page__result-img" alt="Face">
  <div class="round-results-page__result-text">
  <p>You said the face was {{result}}</p>
  <p>Emotion API was {{#}}% sure it was {{emotion}}</p>
  </div>
  </div>
  <div class="round-results-page__result" id='res4' >
  <img src="assets/imgs/su810005_1280.jpg" class="img-responsive round-results-page__result-img" alt="Face">
  <div class="round-results-page__result-text">
  <p>You said the face was {{result}}</p>
  <p>Emotion API was {{#}}% sure it was {{emotion}}</p>
  </div>
  </div>
  <div class="round-results-page__result" id='res5'>
  <img src="assets/imgs/h19075_1280.jpg" class="img-responsive round-results-page__result-img" alt="Face">
  <div class="round-results-page__result-text">
  <p>You said the face was {{result}}</p>
  <p>Emotion API was {{#}}% sure it was {{emotion}}</p>
  </div>
  </div>
  </div>
  <div class="col-xs-12 round-results-page__results-comparison">
  <h2>You agreed with Emotion API {{#}}% of the time</h2>
  </div>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block round-results-page__button">Play Again</button>
  </div>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block round-results-page__button">Lifetime Results</button>
  </div>
  </div> `
}
