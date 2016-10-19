let pages = {
  'landing':`
    <div class="landing-page" id='landing' style='display:none;'>
      <div class="col-xs-12">
        <div class="landing-page__header">
          <img src="assets/icons/logo.svg" alt="" class="img-responsive landing-page__logo">
          <hr />
          <h1 class="landing-page__title landing-page__title--main">Face It</h1>
          <hr />
        </div>
        <h2 class="landing-page__title landing-page__title--login">Sign Up / Log In</h2>
        <form>
          <div class=" form-group landing-page__login-form">
            <h3>Enter your user details</h3>
            <h4>If this is your first time using <strong style="color: #66938F">Face It</strong>, this will create your username and password</h4>
            <input type="text" class="form-control" id="username" placeholder="Username">
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
        </form>
        <button type="button" class="btn btn-default btn-lg btn-block" id="start">Login</button>
        <div id="loginReply" class="landing-page__message"></div>
      </div>
    </div> `,
  'intro':`
    <div class="intro-page" style='display:none;' id='intro'>
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
        <button type="button" class="btn btn-default btn-lg btn-block" id="startGame">Continue</button>
      </div>
    </div>
  `,
  'levelPage':`
    <div class="level-page" id="level">
      <div class="level-page__conveyer-belts">
        <svg viewBox="0 0 321 307" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
      <defs>
      <rect id="path-1" x="2" y="0" width="80" height="120"></rect>
      <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="80" height="120" fill="white">
      <use xlink:href="#path-1"></use>
      </mask>
      <rect id="path-3" x="2" y="20" width="60" height="54"></rect>
      <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="60" height="54" fill="white">
      <use xlink:href="#path-3"></use>
      </mask>
      <rect id="path-5" x="0" y="0" width="38" height="22.1879195" rx="7.6"></rect>
      <rect id="path-7" x="0" y="0" width="5.57333333" height="5.61073826"></rect>
      <ellipse id="path-9" cx="2.78666667" cy="2.80536913" rx="1.77333333" ry="1.7852349"></ellipse>
      <rect id="path-11" x="0" y="0.0358903263" width="17.9758582" height="11.7756403"></rect>
      <ellipse id="path-13" cx="8.98792914" cy="9.19971898" rx="8.98792914" ry="9.19971898"></ellipse>
      <rect id="path-15" x="0" y="2.84217095e-15" width="17.8181753" height="11.7756403"></rect>
      <ellipse id="path-17" cx="8.14527472" cy="8.34732073" rx="8.0836178" ry="8.34732073"></ellipse>
      <rect id="path-19" x="0" y="0" width="10.0066667" height="5.99328859"></rect>
      <rect id="path-21" x="0" y="0" width="10.0066667" height="5.99328859"></rect>
      <rect id="path-23" x="10" y="5" width="30" height="80"></rect>
      <mask id="mask-24" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-5" y="-5" width="40" height="90">
      <rect x="5" y="0" width="40" height="90" fill="white"></rect>
      <use xlink:href="#path-23" fill="black"></use>
      </mask>
      <rect id="path-25" x="0" y="85" width="50" height="16"></rect>
      <mask id="mask-26" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-5" y="-5" width="60" height="26">
      <rect x="-5" y="80" width="60" height="26" fill="white"></rect>
      <use xlink:href="#path-25" fill="black"></use>
      </mask>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="conveyer" transform="translate(4.000000, 0.000000)">
      <g transform="translate(0.000000, 187.000000)">
      <g id="conveyer-belts" transform="translate(0.000000, 74.000000)" stroke="#616161" stroke-width="10" stroke-linecap="square">
      <path d="M0.998387101,41 L311,41" id="conveyer-bottom"></path>
      <path d="M0.998387133,1 L311.006144,1" id="conveyer-top"></path>
      </g>
      <g id="box" transform="translate(234.000000, 0.000000)">
      <use id="box-main" stroke="#B2DFDB" mask="url(#mask-2)" stroke-width="10" fill="#E0F2F1" xlink:href="#path-1"></use>
      <use id="box-hole-border" stroke="#B2DFDB" mask="url(#mask-4)" stroke-width="10" fill="#E0F2F1" xlink:href="#path-3"></use>
      <rect id="box-hole" fill="#F5F5F5" x="0" y="25" width="57" height="45"></rect>
      </g>
      <path d="M40.9766457,95.1888688 C40.9812826,95.0445975 41.0906454,94.8736416 41.219781,94.8089863 L43.8416878,93.4960207 C43.9707358,93.4313654 44.0577011,93.2618968 44.0348662,93.1192878 L43.4303963,90.3333369 C43.3917256,90.1942274 43.2421173,90.0728785 43.0981084,90.063517 L40.1164419,89.8706886 C39.9723455,89.8613271 39.8010396,89.7483773 39.7357719,89.6196792 L39.3303423,88.874175 C39.2577254,88.749414 39.2585128,88.5457368 39.3321796,88.4215881 L40.8377987,85.882972 C40.9114655,85.7588234 40.8938799,85.5683572 40.7987781,85.4597819 L38.7700549,83.3911632 C38.6633169,83.2939616 38.4726757,83.2717391 38.3465148,83.3418187 L35.7521674,84.7814702 C35.625919,84.8515499 35.4216294,84.8476128 35.2980932,84.7728962 L34.5970341,84.3747282 C34.4695609,84.3070108 34.3609855,84.1335177 34.3558236,83.9892463 L34.2490855,81.0151039 C34.2439236,80.8708326 34.1265992,80.7186871 33.9884522,80.6769542 L31.1786164,80.0046794 C31.0365323,79.9789573 30.864439,80.061898 30.7961092,80.1891088 L29.4008152,82.7863433 C29.3324853,82.9135541 29.2169108,83.0164426 29.1439439,83.0150428 C29.1439439,83.0150428 29.1439439,83.0150428 29.0773639,83.0150428 C28.6724592,83.0150428 28.1397312,83.0552008 28.1397312,83.0552008 C27.9958098,83.0660496 27.810593,82.9779469 27.7282647,82.8593102 L26.022643,80.4036348 C25.9403147,80.2850856 25.7591225,80.2196429 25.620013,80.2581386 L22.9361632,81.1634873 C22.8022156,81.2173813 22.7018644,81.3792382 22.7131506,81.5231596 L22.9419375,84.4420082 C22.9532237,84.5859296 22.8631963,84.7677343 22.7419349,84.846038 L21.8886428,85.4368594 C21.7727183,85.5228623 21.5687786,85.548147 21.435356,85.4929407 L18.6721525,84.3489186 C18.5387299,84.2937123 18.350626,84.33632 18.2540368,84.443583 L16.5318794,86.5791317 C16.4474513,86.6961936 16.449726,86.8860474 16.5370413,87.0010095 L18.2990942,89.321775 C18.3864095,89.4367371 18.4081945,89.6379646 18.3475638,89.769025 L17.8683799,90.9161967 C17.8177231,91.0513691 17.6599782,91.1829543 17.5178941,91.208589 L14.5863594,91.7379923 C14.4442753,91.7636269 14.3095404,91.901249 14.2867929,92.0438581 C14.2867929,92.0438581 14,93.846594 14,94.9227236 L14,94.928498 C14.0000875,94.9348848 14.1112001,94.9805546 14.2467224,95.0300741 L16.982454,96.0292999 C17.1180638,96.0788193 17.2456245,96.2363017 17.2660098,96.3791732 L17.5224436,97.7774419 C17.554465,97.9182136 17.4941842,98.1138417 17.3885836,98.2122682 L15.2218009,100.23023 C15.1162002,100.328657 15.0784919,100.516673 15.1380727,100.648171 L16.3198031,102.939365 C16.3925949,103.064038 16.5674004,103.140155 16.7082596,103.108483 L19.562103,102.467267 C19.7029622,102.435596 19.8963156,102.498239 19.9918549,102.606464 L21.0438373,103.700354 C21.1482131,103.800093 21.2044693,103.996071 21.1687733,104.135968 L20.4424295,106.9836 C20.4067335,107.123497 20.4773381,107.301189 20.5992995,107.378443 L22.8271503,108.633928 C22.9563734,108.698321 23.1450023,108.666912 23.2464035,108.564198 L25.3129224,106.469332 C25.4143235,106.366531 25.6113515,106.313162 25.7507234,106.350608 L27.2201216,106.677209 C27.3622057,106.702581 27.5158385,106.835391 27.5614209,106.972401 L28.4834803,109.741379 C28.5290627,109.878301 28.6844453,109.993701 28.8288042,109.997813 C28.8288042,109.997813 28.9061455,110 29.0771014,110 C29.9634648,110 31.4158024,109.810146 31.4158024,109.810146 C31.5589364,109.791423 31.700408,109.660538 31.7300672,109.519241 L32.340399,106.618591 C32.3701456,106.477294 32.5064554,106.324274 32.6433776,106.278516 L33.936133,105.788396 C34.0689432,105.731702 34.2694707,105.759437 34.3818957,105.849989 L36.6496421,107.676872 C36.762067,107.767425 36.9517458,107.775211 37.0711699,107.694108 L39.1999819,106.079738 C39.3102195,105.986474 39.3583391,105.799857 39.3069824,105.664947 L38.2453761,102.876897 C38.1940193,102.741987 38.2252534,102.538922 38.3147558,102.42571 L39.0175648,101.467692 C39.0987557,101.348355 39.2825726,101.263227 39.4261441,101.278713 L42.3275821,101.590178 C42.4711535,101.605576 42.6352852,101.509687 42.6924163,101.377139 L43.6428225,98.778155 C43.6849928,98.6400954 43.624537,98.4569784 43.50835,98.3713255 L41.1004443,96.5943117 C40.9842573,96.5085713 40.9004417,96.3209048 40.9141777,96.1771583 L40.9766457,95.1888688 L40.9766457,95.1888688 Z M29.2849998,101.570062 C25.8138811,101.570062 23,98.7561812 23,95.2850624 C23,91.8138811 25.8138811,89 29.2849998,89 C32.7561186,89 35.5699997,91.8138811 35.5699997,95.2849998 C35.5699997,98.7561186 32.7561186,101.570062 29.2849998,101.570062 L29.2849998,101.570062 Z" class="gear" fill="#9E9E9E"></path>
      <path d="M100.976646,95.1888688 C100.981283,95.0445975 101.090645,94.8736416 101.219781,94.8089863 L103.841688,93.4960207 C103.970736,93.4313654 104.057701,93.2618968 104.034866,93.1192878 L103.430396,90.3333369 C103.391726,90.1942274 103.242117,90.0728785 103.098108,90.063517 L100.116442,89.8706886 C99.9723455,89.8613271 99.8010396,89.7483773 99.7357719,89.6196792 L99.3303423,88.874175 C99.2577254,88.749414 99.2585128,88.5457368 99.3321796,88.4215881 L100.837799,85.882972 C100.911465,85.7588234 100.89388,85.5683572 100.798778,85.4597819 L98.7700549,83.3911632 C98.6633169,83.2939616 98.4726757,83.2717391 98.3465148,83.3418187 L95.7521674,84.7814702 C95.625919,84.8515499 95.4216294,84.8476128 95.2980932,84.7728962 L94.5970341,84.3747282 C94.4695609,84.3070108 94.3609855,84.1335177 94.3558236,83.9892463 L94.2490855,81.0151039 C94.2439236,80.8708326 94.1265992,80.7186871 93.9884522,80.6769542 L91.1786164,80.0046794 C91.0365323,79.9789573 90.864439,80.061898 90.7961092,80.1891088 L89.4008152,82.7863433 C89.3324853,82.9135541 89.2169108,83.0164426 89.1439439,83.0150428 C89.1439439,83.0150428 89.1439439,83.0150428 89.0773639,83.0150428 C88.6724592,83.0150428 88.1397312,83.0552008 88.1397312,83.0552008 C87.9958098,83.0660496 87.810593,82.9779469 87.7282647,82.8593102 L86.022643,80.4036348 C85.9403147,80.2850856 85.7591225,80.2196429 85.620013,80.2581386 L82.9361632,81.1634873 C82.8022156,81.2173813 82.7018644,81.3792382 82.7131506,81.5231596 L82.9419375,84.4420082 C82.9532237,84.5859296 82.8631963,84.7677343 82.7419349,84.846038 L81.8886428,85.4368594 C81.7727183,85.5228623 81.5687786,85.548147 81.435356,85.4929407 L78.6721525,84.3489186 C78.5387299,84.2937123 78.350626,84.33632 78.2540368,84.443583 L76.5318794,86.5791317 C76.4474513,86.6961936 76.449726,86.8860474 76.5370413,87.0010095 L78.2990942,89.321775 C78.3864095,89.4367371 78.4081945,89.6379646 78.3475638,89.769025 L77.8683799,90.9161967 C77.8177231,91.0513691 77.6599782,91.1829543 77.5178941,91.208589 L74.5863594,91.7379923 C74.4442753,91.7636269 74.3095404,91.901249 74.2867929,92.0438581 C74.2867929,92.0438581 74,93.846594 74,94.9227236 L74,94.928498 C74.0000875,94.9348848 74.1112001,94.9805546 74.2467224,95.0300741 L76.982454,96.0292999 C77.1180638,96.0788193 77.2456245,96.2363017 77.2660098,96.3791732 L77.5224436,97.7774419 C77.554465,97.9182136 77.4941842,98.1138417 77.3885836,98.2122682 L75.2218009,100.23023 C75.1162002,100.328657 75.0784919,100.516673 75.1380727,100.648171 L76.3198031,102.939365 C76.3925949,103.064038 76.5674004,103.140155 76.7082596,103.108483 L79.562103,102.467267 C79.7029622,102.435596 79.8963156,102.498239 79.9918549,102.606464 L81.0438373,103.700354 C81.1482131,103.800093 81.2044693,103.996071 81.1687733,104.135968 L80.4424295,106.9836 C80.4067335,107.123497 80.4773381,107.301189 80.5992995,107.378443 L82.8271503,108.633928 C82.9563734,108.698321 83.1450023,108.666912 83.2464035,108.564198 L85.3129224,106.469332 C85.4143235,106.366531 85.6113515,106.313162 85.7507234,106.350608 L87.2201216,106.677209 C87.3622057,106.702581 87.5158385,106.835391 87.5614209,106.972401 L88.4834803,109.741379 C88.5290627,109.878301 88.6844453,109.993701 88.8288042,109.997813 C88.8288042,109.997813 88.9061455,110 89.0771014,110 C89.9634648,110 91.4158024,109.810146 91.4158024,109.810146 C91.5589364,109.791423 91.700408,109.660538 91.7300672,109.519241 L92.340399,106.618591 C92.3701456,106.477294 92.5064554,106.324274 92.6433776,106.278516 L93.936133,105.788396 C94.0689432,105.731702 94.2694707,105.759437 94.3818957,105.849989 L96.6496421,107.676872 C96.762067,107.767425 96.9517458,107.775211 97.0711699,107.694108 L99.1999819,106.079738 C99.3102195,105.986474 99.3583391,105.799857 99.3069824,105.664947 L98.2453761,102.876897 C98.1940193,102.741987 98.2252534,102.538922 98.3147558,102.42571 L99.0175648,101.467692 C99.0987557,101.348355 99.2825726,101.263227 99.4261441,101.278713 L102.327582,101.590178 C102.471154,101.605576 102.635285,101.509687 102.692416,101.377139 L103.642823,98.778155 C103.684993,98.6400954 103.624537,98.4569784 103.50835,98.3713255 L101.100444,96.5943117 C100.984257,96.5085713 100.900442,96.3209048 100.914178,96.1771583 L100.976646,95.1888688 L100.976646,95.1888688 Z M89.2849998,101.570062 C85.8138811,101.570062 83,98.7561812 83,95.2850624 C83,91.8138811 85.8138811,89 89.2849998,89 C92.7561186,89 95.5699997,91.8138811 95.5699997,95.2849998 C95.5699997,98.7561186 92.7561186,101.570062 89.2849998,101.570062 L89.2849998,101.570062 Z" class="gear" fill="#9E9E9E"></path>
      <path d="M160.976646,95.1888688 C160.981283,95.0445975 161.090645,94.8736416 161.219781,94.8089863 L163.841688,93.4960207 C163.970736,93.4313654 164.057701,93.2618968 164.034866,93.1192878 L163.430396,90.3333369 C163.391726,90.1942274 163.242117,90.0728785 163.098108,90.063517 L160.116442,89.8706886 C159.972345,89.8613271 159.80104,89.7483773 159.735772,89.6196792 L159.330342,88.874175 C159.257725,88.749414 159.258513,88.5457368 159.33218,88.4215881 L160.837799,85.882972 C160.911465,85.7588234 160.89388,85.5683572 160.798778,85.4597819 L158.770055,83.3911632 C158.663317,83.2939616 158.472676,83.2717391 158.346515,83.3418187 L155.752167,84.7814702 C155.625919,84.8515499 155.421629,84.8476128 155.298093,84.7728962 L154.597034,84.3747282 C154.469561,84.3070108 154.360986,84.1335177 154.355824,83.9892463 L154.249086,81.0151039 C154.243924,80.8708326 154.126599,80.7186871 153.988452,80.6769542 L151.178616,80.0046794 C151.036532,79.9789573 150.864439,80.061898 150.796109,80.1891088 L149.400815,82.7863433 C149.332485,82.9135541 149.216911,83.0164426 149.143944,83.0150428 C149.143944,83.0150428 149.143944,83.0150428 149.077364,83.0150428 C148.672459,83.0150428 148.139731,83.0552008 148.139731,83.0552008 C147.99581,83.0660496 147.810593,82.9779469 147.728265,82.8593102 L146.022643,80.4036348 C145.940315,80.2850856 145.759122,80.2196429 145.620013,80.2581386 L142.936163,81.1634873 C142.802216,81.2173813 142.701864,81.3792382 142.713151,81.5231596 L142.941938,84.4420082 C142.953224,84.5859296 142.863196,84.7677343 142.741935,84.846038 L141.888643,85.4368594 C141.772718,85.5228623 141.568779,85.548147 141.435356,85.4929407 L138.672153,84.3489186 C138.53873,84.2937123 138.350626,84.33632 138.254037,84.443583 L136.531879,86.5791317 C136.447451,86.6961936 136.449726,86.8860474 136.537041,87.0010095 L138.299094,89.321775 C138.386409,89.4367371 138.408195,89.6379646 138.347564,89.769025 L137.86838,90.9161967 C137.817723,91.0513691 137.659978,91.1829543 137.517894,91.208589 L134.586359,91.7379923 C134.444275,91.7636269 134.30954,91.901249 134.286793,92.0438581 C134.286793,92.0438581 134,93.846594 134,94.9227236 L134,94.928498 C134.000087,94.9348848 134.1112,94.9805546 134.246722,95.0300741 L136.982454,96.0292999 C137.118064,96.0788193 137.245625,96.2363017 137.26601,96.3791732 L137.522444,97.7774419 C137.554465,97.9182136 137.494184,98.1138417 137.388584,98.2122682 L135.221801,100.23023 C135.1162,100.328657 135.078492,100.516673 135.138073,100.648171 L136.319803,102.939365 C136.392595,103.064038 136.5674,103.140155 136.70826,103.108483 L139.562103,102.467267 C139.702962,102.435596 139.896316,102.498239 139.991855,102.606464 L141.043837,103.700354 C141.148213,103.800093 141.204469,103.996071 141.168773,104.135968 L140.44243,106.9836 C140.406734,107.123497 140.477338,107.301189 140.599299,107.378443 L142.82715,108.633928 C142.956373,108.698321 143.145002,108.666912 143.246403,108.564198 L145.312922,106.469332 C145.414324,106.366531 145.611351,106.313162 145.750723,106.350608 L147.220122,106.677209 C147.362206,106.702581 147.515839,106.835391 147.561421,106.972401 L148.48348,109.741379 C148.529063,109.878301 148.684445,109.993701 148.828804,109.997813 C148.828804,109.997813 148.906146,110 149.077101,110 C149.963465,110 151.415802,109.810146 151.415802,109.810146 C151.558936,109.791423 151.700408,109.660538 151.730067,109.519241 L152.340399,106.618591 C152.370146,106.477294 152.506455,106.324274 152.643378,106.278516 L153.936133,105.788396 C154.068943,105.731702 154.269471,105.759437 154.381896,105.849989 L156.649642,107.676872 C156.762067,107.767425 156.951746,107.775211 157.07117,107.694108 L159.199982,106.079738 C159.31022,105.986474 159.358339,105.799857 159.306982,105.664947 L158.245376,102.876897 C158.194019,102.741987 158.225253,102.538922 158.314756,102.42571 L159.017565,101.467692 C159.098756,101.348355 159.282573,101.263227 159.426144,101.278713 L162.327582,101.590178 C162.471154,101.605576 162.635285,101.509687 162.692416,101.377139 L163.642823,98.778155 C163.684993,98.6400954 163.624537,98.4569784 163.50835,98.3713255 L161.100444,96.5943117 C160.984257,96.5085713 160.900442,96.3209048 160.914178,96.1771583 L160.976646,95.1888688 L160.976646,95.1888688 Z M149.285,101.570062 C145.813881,101.570062 143,98.7561812 143,95.2850624 C143,91.8138811 145.813881,89 149.285,89 C152.756119,89 155.57,91.8138811 155.57,95.2849998 C155.57,98.7561186 152.756119,101.570062 149.285,101.570062 L149.285,101.570062 Z" class="gear" fill="#9E9E9E"></path>
      <path d="M220.976646,95.1888688 C220.981283,95.0445975 221.090645,94.8736416 221.219781,94.8089863 L223.841688,93.4960207 C223.970736,93.4313654 224.057701,93.2618968 224.034866,93.1192878 L223.430396,90.3333369 C223.391726,90.1942274 223.242117,90.0728785 223.098108,90.063517 L220.116442,89.8706886 C219.972345,89.8613271 219.80104,89.7483773 219.735772,89.6196792 L219.330342,88.874175 C219.257725,88.749414 219.258513,88.5457368 219.33218,88.4215881 L220.837799,85.882972 C220.911465,85.7588234 220.89388,85.5683572 220.798778,85.4597819 L218.770055,83.3911632 C218.663317,83.2939616 218.472676,83.2717391 218.346515,83.3418187 L215.752167,84.7814702 C215.625919,84.8515499 215.421629,84.8476128 215.298093,84.7728962 L214.597034,84.3747282 C214.469561,84.3070108 214.360986,84.1335177 214.355824,83.9892463 L214.249086,81.0151039 C214.243924,80.8708326 214.126599,80.7186871 213.988452,80.6769542 L211.178616,80.0046794 C211.036532,79.9789573 210.864439,80.061898 210.796109,80.1891088 L209.400815,82.7863433 C209.332485,82.9135541 209.216911,83.0164426 209.143944,83.0150428 C209.143944,83.0150428 209.143944,83.0150428 209.077364,83.0150428 C208.672459,83.0150428 208.139731,83.0552008 208.139731,83.0552008 C207.99581,83.0660496 207.810593,82.9779469 207.728265,82.8593102 L206.022643,80.4036348 C205.940315,80.2850856 205.759122,80.2196429 205.620013,80.2581386 L202.936163,81.1634873 C202.802216,81.2173813 202.701864,81.3792382 202.713151,81.5231596 L202.941938,84.4420082 C202.953224,84.5859296 202.863196,84.7677343 202.741935,84.846038 L201.888643,85.4368594 C201.772718,85.5228623 201.568779,85.548147 201.435356,85.4929407 L198.672153,84.3489186 C198.53873,84.2937123 198.350626,84.33632 198.254037,84.443583 L196.531879,86.5791317 C196.447451,86.6961936 196.449726,86.8860474 196.537041,87.0010095 L198.299094,89.321775 C198.386409,89.4367371 198.408195,89.6379646 198.347564,89.769025 L197.86838,90.9161967 C197.817723,91.0513691 197.659978,91.1829543 197.517894,91.208589 L194.586359,91.7379923 C194.444275,91.7636269 194.30954,91.901249 194.286793,92.0438581 C194.286793,92.0438581 194,93.846594 194,94.9227236 L194,94.928498 C194.000087,94.9348848 194.1112,94.9805546 194.246722,95.0300741 L196.982454,96.0292999 C197.118064,96.0788193 197.245625,96.2363017 197.26601,96.3791732 L197.522444,97.7774419 C197.554465,97.9182136 197.494184,98.1138417 197.388584,98.2122682 L195.221801,100.23023 C195.1162,100.328657 195.078492,100.516673 195.138073,100.648171 L196.319803,102.939365 C196.392595,103.064038 196.5674,103.140155 196.70826,103.108483 L199.562103,102.467267 C199.702962,102.435596 199.896316,102.498239 199.991855,102.606464 L201.043837,103.700354 C201.148213,103.800093 201.204469,103.996071 201.168773,104.135968 L200.44243,106.9836 C200.406734,107.123497 200.477338,107.301189 200.599299,107.378443 L202.82715,108.633928 C202.956373,108.698321 203.145002,108.666912 203.246403,108.564198 L205.312922,106.469332 C205.414324,106.366531 205.611351,106.313162 205.750723,106.350608 L207.220122,106.677209 C207.362206,106.702581 207.515839,106.835391 207.561421,106.972401 L208.48348,109.741379 C208.529063,109.878301 208.684445,109.993701 208.828804,109.997813 C208.828804,109.997813 208.906146,110 209.077101,110 C209.963465,110 211.415802,109.810146 211.415802,109.810146 C211.558936,109.791423 211.700408,109.660538 211.730067,109.519241 L212.340399,106.618591 C212.370146,106.477294 212.506455,106.324274 212.643378,106.278516 L213.936133,105.788396 C214.068943,105.731702 214.269471,105.759437 214.381896,105.849989 L216.649642,107.676872 C216.762067,107.767425 216.951746,107.775211 217.07117,107.694108 L219.199982,106.079738 C219.31022,105.986474 219.358339,105.799857 219.306982,105.664947 L218.245376,102.876897 C218.194019,102.741987 218.225253,102.538922 218.314756,102.42571 L219.017565,101.467692 C219.098756,101.348355 219.282573,101.263227 219.426144,101.278713 L222.327582,101.590178 C222.471154,101.605576 222.635285,101.509687 222.692416,101.377139 L223.642823,98.778155 C223.684993,98.6400954 223.624537,98.4569784 223.50835,98.3713255 L221.100444,96.5943117 C220.984257,96.5085713 220.900442,96.3209048 220.914178,96.1771583 L220.976646,95.1888688 L220.976646,95.1888688 Z M209.285,101.570062 C205.813881,101.570062 203,98.7561812 203,95.2850624 C203,91.8138811 205.813881,89 209.285,89 C212.756119,89 215.57,91.8138811 215.57,95.2849998 C215.57,98.7561186 212.756119,101.570062 209.285,101.570062 L209.285,101.570062 Z" class="gear" fill="#9E9E9E"></path>
      {{ path }}
      <g transform="translate(248.000000, 81.000000)">
      <rect id="Rectangle-4" stroke="#B2DFDB" stroke-width="5" fill="#F5F5F5" x="0" y="0" width="46" height="27.3999996"></rect>
      <text x="23" y="21" text-anchor="middle" id="level-display-text" font-size="18" font-weight="bold" fill="#616161"></text>
      </g>
      </g>
      <g id="user-icon" transform="translate(10.000000, 60.000000)">
      <rect id="Rectangle-2" fill="#B2DFDB" x="0" y="8.67114094" width="38" height="28.9463087" rx="7.6"></rect>
      <g id="Rectangle-2-Copy-Clipped" transform="translate(0.000000, 15.302013)">
      <mask id="mask-6" fill="white">
      <use xlink:href="#path-5"></use>
      </mask>
      <g id="path-1"></g>
      <g id="Rectangle-2-Copy" mask="url(#mask-6)" stroke="#B2DFDB" stroke-width="3.54666667" fill="#E0F2F1">
      <rect id="path-1" x="0" y="0" width="38" height="22.1879195" rx="7.6"></rect>
      </g>
      </g>
      <rect id="Rectangle-3" fill="#E0F2F1" x="1.77333333" y="15.4295302" width="34.4533333" height="8.79865772" rx="1.9"></rect>
      <polygon id="Triangle" fill="#B2DFDB" points="19 2.80536913 20.6466667 8.67114094 17.3533333 8.67114094"></polygon>
      <g id="Oval" transform="translate(16.213333, 0.000000)">
      <g id="path-3-link" transform="translate(1.013333, 1.020134)" fill="#E0F2F1">
      <ellipse id="path-3" cx="1.77333333" cy="1.7852349" rx="1.77333333" ry="1.7852349"></ellipse>
      </g>
      <g id="Clipped">
      <mask id="mask-8" fill="white">
      <use xlink:href="#path-7"></use>
      </mask>
      <g id="Rectangle-path"></g>
      <g id="path-3-link" mask="url(#mask-8)" stroke="#B2DFDB" stroke-width="2.02666667">
      <g transform="translate(1.013333, 1.020134)" id="path-3">
      <ellipse cx="1.77333333" cy="1.7852349" rx="1.77333333" ry="1.7852349"></ellipse>
      </g>
      </g>
      <mask id="mask-10" fill="white">
      <use xlink:href="#path-9"></use>
      </mask>
      <g id="path-3"></g>
      </g>
      </g>
      <g id="Mouth" transform="translate(10.006667, 25.248322)">
      <g id="Oval-Clipped">
      <g>
      <mask id="mask-12" fill="white">
      <use xlink:href="#path-11"></use>
      </mask>
      <g id="path-5"></g>
      <g id="Oval" mask="url(#mask-12)">
      <g transform="translate(0.000000, -11.348993)" id="Clipped">
      <g transform="translate(0.000000, 0.012752)">
      <g id="Group">
      <g id="path-5-Clipped">
      <mask id="mask-14" fill="white">
      <use xlink:href="#path-13"></use>
      </mask>
      <g id="path-7"></g>
      <ellipse id="path-5" stroke="#B2DFDB" stroke-width="1.9" fill="#B2DFDB" mask="url(#mask-14)" cx="8.98792914" cy="9.19971898" rx="8.98792914" ry="9.19971898"></ellipse>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      <g id="Oval-Clipped" transform="translate(0.000000, 0.892617)">
      <g>
      <mask id="mask-16" fill="white">
      <use xlink:href="#path-15"></use>
      </mask>
      <g id="path-9"></g>
      <g id="Oval" mask="url(#mask-16)">
      <g transform="translate(0.760000, -11.604027)" id="Clipped">
      <g transform="translate(0.123314, 0.012752)">
      <g id="Group">
      <g id="path-5-Clipped">
      <mask id="mask-18" fill="white">
      <use xlink:href="#path-17"></use>
      </mask>
      <g id="path-11"></g>
      <ellipse id="path-5" fill="#F5F5F5" mask="url(#mask-18)" cx="8.09842049" cy="8.47451871" rx="8.8242392" ry="9.11210261"></ellipse>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
      <g id="Eyes" transform="translate(6.080000, 17.342282)">
      <g id="Oval-2-Copy-2-Clipped">
      <mask id="mask-20" fill="white">
      <use xlink:href="#path-19"></use>
      </mask>
      <g id="path-13"></g>
      <ellipse id="Oval-2-Copy-2" stroke="#B2DFDB" stroke-width="0.886666667" mask="url(#mask-20)" cx="5.00333333" cy="5.9295302" rx="2.85" ry="2.86912752"></ellipse>
      </g>
      <g id="Oval-2-Copy-2-Clipped" transform="translate(15.833333, 0.000000)">
      <mask id="mask-22" fill="white">
      <use xlink:href="#path-21"></use>
      </mask>
      <g id="path-15"></g>
      <ellipse id="Oval-2-Copy-2" stroke="#B2DFDB" stroke-width="0.886666667" mask="url(#mask-22)" cx="5.00333333" cy="6.05704698" rx="2.85" ry="2.86912752"></ellipse>
      </g>
      </g>
      </g>
      <g id="pipe" transform="translate(4.000000, 0.000000)">
      <g id="Rectangle-5">
      <use fill="#E0F2F1" fill-rule="evenodd" xlink:href="#path-23"></use>
      <use stroke="#B2DFDB" mask="url(#mask-24)" stroke-width="10" xlink:href="#path-23"></use>
      </g>
      <g id="Rectangle-6">
      <use fill="#E0F2F1" fill-rule="evenodd" xlink:href="#path-25"></use>
      <use stroke="#B2DFDB" mask="url(#mask-26)" stroke-width="10" xlink:href="#path-25"></use>
      </g>
      <rect id="Rectangle-7" fill="#E0F2F1" x="10" y="0" width="30" height="32"></rect>
      </g>
      </g>
      </g>
        </svg>
      </div>
      <button id="play" type="button" class="btn btn-default btn-lg btn-block">Play</button>
      <button id="lifeTimeResults" type="button" class="btn btn-default btn-lg btn-block">Lifetime Results</button>
    </div>`,
  'gamePage':`
    <div class="game-page" id='{{id}}' style='display:none;'>
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
  'roundResultContainer':`
    <div class="round-results-page" style="display:none" id='roundResult'>
      <div class="round-results-page__header">
        <h1>Results this round:</h1>
      </div>
      <hr>
      {{{roundAnswers}}}
      <div class="col-xs-12 round-results-page__results-comparison" id='risultatone'>
        <h2>You agreed with Emotion API {{risultatone}}% of the time</h2>
      </div>
        <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='playAgain1'>Play Again</button>
        <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='lifeTime'>Lifetime Results</button>
    </div>`,
  'roundAnswer':`
  <div class="col-xs-10 col-xs-offset-1 round-results-page__result-container">
    <div class="round-results-page__result" id='res1'>
      <img src="{{imagePath}}" class="img-responsive round-results-page__result-img" alt="Face" >
      <div class="round-results-page__result-text">
        <p>You said the face showed {{userResult}}</p>
        <p>Emotion API was {{apiConfidanceValue}}% sure it was {{apiEmotion}}</p>
      </div>
    </div>
  </div>
  `,
  'lifeTimePage':`
    <div class="lifetime-results-page" id='lifeTimePage' style='display:none;'>
      <div class="round-results-page__header">
        <h1>Lifetime Results:</h1>
      </div>
      <hr>
      <div id="lifetime-results-page__lifetime-graph"></div>
      <div class="lifetime-results-page__emotions-explanation">
        <h3>Emotions</h3>
        <hr>
        <p>These graphs show the amount of times you agreed with the emotion API</p>
      </div>
      {{#each emotions}}
        <div class="lifetime-results-page__emotion-results">
          <h2>{{ this.properType }}</h2>
          <p>How often did you answer happiness, compared to Emotion API?</p>
          <div id={{ this.type }} class="emotion"></div>
        </div>
      {{/each}}
      <div class="lifetime-results-page__feedback">
        <h2>You could work on:</h2>
        <ul>
          {{#each workOn}}
            <li>{{this}}</li>
          {{/each}}
        </ul>
      </div>
      <hr>
        <button type="button" class="btn btn-default btn-lg btn-block results-page__button"id='playAgain2'>Play Again</button>
        <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id='roundResults2'>Round Results</button>
    </div>`
}
