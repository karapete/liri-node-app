// array of commands
var commandArray = ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"];



//twitter keys, path to keys.js file
var Twit = require('twit');
var keys = require('./keys');
var T = new Twit(keys);

//need to pull tweets from my twitter
//add prompts to ask quetions

var inquirer = require("inquirer");

inquirer.prompt([

  {
    type: "list",
    name: "whatCommand",
    message: "What would you like to do??",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
  }

]).then(function(user) {

  //if the user choose's tweets
  if (user.whatCommand === "my-tweets") {
  		console.log("You can see my tweets!")
  		var searchTwitter = {
				q: 'beverly_tart',
				count:20
}

	T.get('search/tweets', searchTwitter, gotData)

	function gotData(err, data, response) {
			var tweets = data.statuses;
			for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);
	   } 
	 }
}
  else{
  	console.log("Fine don't look at my tweets!")
  }
  if (user.whatCommand === "spotify-this-song") {
  	console.log("Play that funky music white boy")
  }
});



// //spotify

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <d2836498c70d41abb5acdb056492b2c7>,
//   secret: <1592c8f35dbb43caa04068c25e6feb8a>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);



// code to post tweets from node.js
// var tweet = {
// 	status: 'a tweet from nodejs!'
// }

// T.post('statuses/update', tweet, tweeting);

//  function tweeting(err, data, response) {
//   console.log(data)
// }



