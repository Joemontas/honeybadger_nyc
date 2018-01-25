const express = require('express')
const logger = require('morgan')
const app = express();
const pokemon = require('./poke_array.js');

app.use(logger('dev'));



//INDEX ROUTE FOR THE POKEMON SHOULD SEND ALL THE POKEMON TO THE USER
app.get('/pokemons', function (req, res) {
    res.send(pokemon);
});

//BE ABLE TO SEARCH FOR A POKEMON BY NAME
app.get('/pokemons/byName/:name', function (req, res) {
    const name = req.params.name;

    for(let i = 0; i < pokemon.length; i++) {
        if(pokemon[i].name.toLowerCase() === name) {
            res.send(pokemon[i]);
        }
    }
});

//BE ABLE TO SEARCH FOR A POKEMON BY TYPE
app.get('/pokemons/byType/:type', function (req, res) {
    const type = req.params.type;
    const result = pokemon.filter(function(poke) {
        return poke.type.includes(type);
    })

    res.send(result);
});
//BE ABLE TO GET A RANDOM POKEMON
app.get('/pokemons/random', function (req, res) {
    const index = Math.floor(Math.random() * pokemon.length);
    res.send(pokemon[index]);
 
});
//BE ABLE TO SEARCH FOR A POKEMON BY ID
app.get('/pokemons/:id', function (req, res) {
    const id = req.params.id;
    const result = pokemon.filter(function(poke) {
        return poke.type.includes(id);
    })
    res.send(pokemon);
});


app.listen(3000);
