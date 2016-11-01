##Face It
###Anna Freud Design Sprint

####Developed by *@daymos, @heatherlauren, @emmadeacon* and *@jakubsvihla*

## Browser version of the app ( only compatible with a recent version of Chrome)

Online version of the app is available here `https://cypiapt-lndse.github.io/Face-It/`
Should the app stop working please open an issue in the repo and we will fix it asap


## How to run the app

from your terminal run the following:
```
git clone  https://github.com/CYPIAPT-LNDSE/afSimonStewart.git faceit

cd faceit

open index.html

```
if `open index.html` doesnt work just double click on index.html

## compiling the cordova app

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
* By comparing the user's results to an API rather than that of an authority figure like a teacher, we hope to instill more respect for the user's choices.

##Tech Stack

This is an Hybrid no-backend cordova app.  Our stack includes: handlebars, bootstrap, pouchDB, couchDB, JQuery.  
