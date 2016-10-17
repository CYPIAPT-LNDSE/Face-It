let pages = {
  'landing':`<div class="landing-page" id='landing' style='display:none;'>
  <div class="col-xs-10 col-xs-offset-1">
  <div class="landing-page__header">
  <img src="assets/icons/logo.svg" alt="" class="img-responsive landing-page__logo">
  <hr />
  <h1 class="landing-page__title">Face It</h1>
  <hr />
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
  <h1 id='userName'>Hi, {{username}}!</h1>
  <p><strong style="color: #66938F">Face It</strong> is a game about recognising emotions.</p>
  <hr>
  <p class="intro-page__explanation-p-margin">It's based on a computer programme called Emotion API.</p>
  <p>Emotion API can detect emotions in photos.</p>
  <hr>
  <p class="intro-page__explanation-p-margin">We're going to show you a photo of a face and two emotions to choose from.</p>
  <p>Pick which emotion you're most sure the face is expressing.</p>
  <hr>
  <p class="intro-page__explanation-p-margin">After five faces, we'll compare your choices to Emotion API's!</p>
  </div>
  <div class="intro-page__level-bar--label">
  <p>You are at Level 1</p>
  </div>
  <div class="col-xs-12 intro-page__level-bar">
  <p class="intro-page__level-bar-component intro-page__level-bar-component--active">1</p>
  <p class="intro-page__level-bar-component intro-page__level-bar-component">2</p>
  <p class="intro-page__level-bar-component intro-page__level-bar-component">3</p>
  <p class="intro-page__level-bar-component intro-page__level-bar-component">4</p>
  <p class="intro-page__level-bar-component intro-page__level-bar-component">5</p>
  </div>
  <button type="button" class="btn btn-default btn-lg btn-block" id="startGame">Continue</button>
  </div>
  </div>
  `,
  'levelPage': 
  `<div class="level-page">
  <div class="level-page__conveyer-belts">
  <img src='./levelPage.svg'>        
  </div>
  <button type="button" class="btn btn-default btn-lg btn-block">Play</button>
  <button type="button" class="btn btn-default btn-lg btn-block">Lifetime Results</button>
  </div>`,
  'gamePage':`<div class="game-page" id='{{id}}' style='display:none;'>
  <div class="game-page-content">
  <div class="col-xs-12 game-page__image-container">
  <img src="{{biggie}}" class="img-responsive" alt="Face" id='biggie'>
  </div>
  <div class="col-xs-6 game-page__button">
  <img src="{{choiceL}}" class="game-page__button-emoji" alt="Happy" id='choiceL'>
  <button type="button" class="btn btn-default btn-lg btn-block" id='buttonL'>{{buttonL}}</button>
  </div>
  <div class="col-xs-6 game-button">
  <img src="{{choiceR}}" class="game-page__button-emoji" alt="Sad" id='choiceR'>
  <button type="button" class="btn btn-default btn-lg btn-block" id="buttonR">{{buttonR}}</button>
  </div>
  </div>
  </div>`,
  'roundResultContainer':`<div class="round-results-page" style="display:none" id='roundResult'>
  <div class="round-results-page__header">
  <h1>Results this round:</h1>
  </div>
  <hr>
  {{{roundAnswers}}}
  <div class="col-xs-12 round-results-page__results-comparison" id='risultatone'>
  <h2>You agreed with Emotion API {{risultatone}} of the time</h2>
  </div>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='playAgain1'>Play Again</button>
  </div>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='lifeTime'>Lifetime Results</button>
  </div>
  </div>`,
  'roundAnswer':`
  <div class="col-xs-10 col-xs-offset-1 round-results-page__result-container">
  <div class="round-results-page__result" id='res1'>
  <img src="{{imagePath}}" class="img-responsive round-results-page__result-img" alt="Face" >
  <div class="round-results-page__result-text">
  <p>You said the face was {{userResult}}</p>
  <p>Emotion API was {{apiConfidanceValue}}% sure it was {{apiEmotion}}</p>
  </div>
  </div>
  </div>
  `,
  'lifeTimeResults':`<div class="lifetime-results-page" id='lifeTimePage' style='display:none;'>
  <div class="lifetime-results-page__disclaimer">
  <p>This is a prototype app, so not all the features are working yet.</p>
  <hr>
  <p>Here is where you'll track your progress in the game.</p>
  <p>This is what it might look like.</p>
  <hr>
  <p>Thank you for testing <strong style="color: #66938F">Face It</strong>!</p>
  </div>
  <div class="lifetime-results-page__key">
  <div class="col-xs-6 text-center">
  <img src="assets/icons/user-icon.svg" class="img-responsive" alt="User Icon">
  <p>You</p>
  </div>
  <div class="col-xs-6 text-center">
  <img src="assets/icons/api-icon.svg" class="img-responsive" alt="API Icon">
  <p>Emotion API</p>
  </div>
  </div>
  <div class="lifetime-results-page__emotion-results">
  <h2>Happiness</h2>
  <p>How often did you answer happiness, compared to Emotion API?</p>
  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">
  <p>Your weekly progress</p>
  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">
  </div>
  <hr>
  <div class="lifetime-results-page__emotion-results">
  <h2>Sadness</h2>
  <p>How often did you answer sadness, compared to Emotion API?</p>
  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">
  <p>Your weekly progress</p>
  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">
  </div>
  <hr>
  <div class="lifetime-results-page__emotion-results">
  <h2>Neutral</h2>
  <p>How often did you answer neutral, compared to Emotion API?</p>
  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">
  <p>Your weekly progress</p>
  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">
  </div>
  <hr>
  <div class="lifetime-results-page__emotion-results">
  <h2>Surprise</h2>
  <p>How often did you answer surprise, compared to Emotion API?</p>
  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">
  <p>Your weekly progress</p>
  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">
  </div>
  <hr>
  <div class="lifetime-results-page__emotion-results">
  <h2>Anger</h2>
  <p>How often did you answer anger, compared to Emotion API?</p>
  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">
  <p>Your weekly progress</p>
  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">
  </div>
  <hr>
  <div class="lifetime-results-page__feedback">
  <h2>You could work on:</h2>
  <ul>
  <li>Anger</li>
  <li>Neutral</li>
  </ul>
  </div>
  <hr>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block results-page__button"id='playAgain2' >Play Again</button>
  </div>
  <div class="col-xs-6">
  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='roundResults'>Round Results</button>
  </div>
  </div>`
}
