##Face It
###Anna Freud Design Sprint

####Prototype developed by *@daymos, @heatherlauren, @emmadeacon* and *@jakubsvihla*
####MVP developed by *@daymos, @heatherlauren, @matthewiiv and @RichAWarren*

## Downloading the android app

navigate to this page with your mobile phone and click [here](https://github.com/CYPIAPT-LNDSE/Face-It/blob/e7675c6e15dbd90286047c369ae21c73b9de511e/binary/android-debug.apk?raw=true)
## Running the app in the browser (currently working in recent versions of Firefox and Chrome)

The online version of the app is available [here](https://cypiapt-lndse.github.io/Face-It/). Should you experience any bugs, please [open an issue in the repo](https://github.com/CYPIAPT-LNDSE/Face-It/issues).

## Running the app locally

from your terminal run the following:
```
git clone  https://github.com/CYPIAPT-LNDSE/afSimonStewart.git faceit

cd faceit

open index.html

```
if `open index.html` doesnt work just double click on index.html

## Compiling the Cordova app

In the terminal in the root folder: (you must have all cordova dependancies installed globally)
```
cordova create cordova test.test.test
```
navigate to cordova/www and remove index.html
then from project's root directory:
```
grunt

cd cordova

//with an emulator
cordova emulate android -target=android-19

//with a device attached (need debug mode on)
cordova run android -device


```
To create different cordova platform, that allows you to run the app on the browser or different emulated version of android do:
```
cd cordova

cordova add platform (here teh platform example:) browser
```
now you can run
```
cordova run browser
```

##About

This project is a game designed for young people with ASD to practice recognising emotions. A user is shown a face and asked to identify the emotion it's displaying. Their choice is then compared to that made by the Microsoft Facial Emotion API. The game is inspired by emotion recognition games that are currently used with children with ASD in schools. However, we feel the app would be an improvement on several fronts:
* The image set can potentially be far larger, meaning users aren't simply memorising the correct answer for individual faces on repeated play.
* Data tracking would allow users to track their personal results, as well as the overall effectiveness of the game to be measured.
* By comparing the user's results to an API rather than that of an authority figure like a teacher, we hope to instil more respect for the user's choices.

##Tech Stack

This is an hybrid no-backend Cordova app. The stack includes Handlebars, Bootstrap, pouchDB, couchDB, jQuery, and D3.  
