// array of commands

var commandArray = ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]




//twitter
var Twitter = require('twitter');
var inquirer =require("inquirer");

var tweets = function() {}

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
inquirer.prompt([

  {
  	type: "checkbox",
    name: "carryingWhat",
    message: "What would you like to do?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do"]
  },



]).then(function(user) {








// //spotify

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });