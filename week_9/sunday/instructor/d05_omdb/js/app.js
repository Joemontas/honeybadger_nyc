$(function() {
    var $resultsContainer = $('#results-container');
    $resultsContainer.on('click', '.movie', function() {
        
    })

    function getMovieData(title) {
        const result = $.ajax({
            url: 'http://www.omdbapi.com/',
            data: {
                s: title,
                apikey: '5887c375'
            }
        })

        return result;
    }

    function normalizedMovies (data) {
        const movieData = data.Search;

        const normalizedMovies = movieData.map(function(movie) {
            const { Poster: poster, Title: title, imdbID } = movie;

            return {
                poster,
                title,
                imdbID
            }
        })

        return normalizedMovies;
    }

    function renderMovies (moviesToRender) {
        $resultsContainer.empty();

        moviesToRender.forEach(function (movie) {
            const { poster, title, imdbID } = movie;
            const template = `
                <div class="movie" data-id="${imdbID}">
                    <h1>${title}</h1>
                    <img src="${poster}" alt="${title}">
                </div>
            `;

            $resultsContainer.append(template);
        })
    }

    getMovieData('Batman')
        .then(normalizedMovies)
        .then(renderMovies)
});





/*****************************************

// $(function() {
//     function movieData(movie) {
//         const result = $.ajax({
//             url: 'http://www.omdbapi.com/',
//             data: {
//                 apikey: '5887c375',
//                 s,

//             },
//             method: 'GET',
//             dataType: 'json',
//         });

//         $('#search-button').click(function(type) {
//             alert(result);
//         });

//         result.then(function(data) {
//             console.log(data);
//         })
// });
// }
    


/*****************************************


/* $( "#target" ).click(function() {
    alert( "Handler for .click() called." );
}); */












// $(function() {
//     function getWeatherData(city) {
//         const result = $.ajax({
//             url: 'https://api.openweathermap.org/data/2.5/weather',
//             data: {
//                 q: city,
//                 APPID: 'c5356edaf4635ba1f2177628daf07618',
//                 units: 'imperial'
//             },
//             dataType: 'json',
//             method: 'GET'
//         });

//         return result;
//     }

//     function transformWeatherData(weatherData) {
//         const cityName = weatherData.name;
//         const temperature = weatherData.main.temp;
//         const description = weatherData.weather[0].description;
//         const lat = weatherData.coord.lat;
//         const long = weatherData.coord.lon;

//         // const { name, main: { temp: temperature }, weather: [ { description } ], coord: { lat, lon: long} } = weatherData;

//         return {
//             cityName,
//             temperature,
//             description,
//             lat,
//             long
//         }
//     }

//     function renderWeatherData(updatedWeatherData) {
//         //LOAD THE DATA
//         const { cityName, temperature, description, lat, long } = updatedWeatherData;
//         const template = `
//             <h1>${cityName}</h1>
//             <h2>${temperature}</h2>
//             <p>${description}</p>
//             <span>LATITUDE: ${lat} || LONGTITUDE: ${long}</span>
//         `;

//         $('#results').append(template);
//     }

//     getWeatherData('New York')
//         .then(transformWeatherData)
//         .then(renderWeatherData)

//     getWeatherData('London')
//         .then(transformWeatherData)
//         .then(renderWeatherData)
//     ;
// })