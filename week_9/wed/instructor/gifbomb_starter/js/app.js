$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});

<<<<<<< HEAD
	$('#search-box').on('click', '#random', randomGifSearch);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);

	$('#gif-container').on('click', 'button', toggleUrl);
=======
	$('#search-box').on('click', '#random', getRandomGif);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);
>>>>>>> 091d8b77ddd5dbcff771a4226221bbc399b3e9ea
});

// Performs an AJAX request to the giphy api
// endpoint: http://api.giphy.com/v1/gifs/random
// api_key: dc6zaTOxFJmzC&
// Request will return an object with a single gif and metadata
<<<<<<< HEAD
var getRandomGif = function() {};

// Renders and displays the random gif returned from the API call
var showRandomGif = function(gif) {};
=======
function getRandomGif() {};
>>>>>>> 091d8b77ddd5dbcff771a4226221bbc399b3e9ea

// Kitten Bomb
// AND
// Puppy Bomb
// Performs an AJAX request to the giphy api
// should ask for 10 gifs
// should render and display them using the gifTemplate
<<<<<<< HEAD
var kittenBomb = function() {};
var puppyBomb = function() {};

// Performs an AJAX request to the giphy api
// with user supplied search params
var	search = function() {};

// Should render and display the results
// returned from the AJAX request to giphy
var showSearchResults = function(results) {};
=======
function kittenBomb() {};
function puppyBomb() {};

// Performs an AJAX request to the giphy api
// with user supplied search params
function search() {};

// Should render and display the results
// returned from the AJAX request to giphy
function renderResults(results) {};
>>>>>>> 091d8b77ddd5dbcff771a4226221bbc399b3e9ea
