const rp = require('request-promise');

function getMovies() {
    return rp({
        url: 'http://omdbapi.com/',
        qs: {
            s: 'Batman',
            apikey: '5887c375'
        }
    })
}

module.exports = getMovies;




// request({
//     url: 'http://omdbapi.com/',
//     qs: {
//         s: 'Batman',
//         apikey: '5887c375'
//     }
    
// },  function(error, response, body) {
//         console.log(response);
// });