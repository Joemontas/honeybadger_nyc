var express = require('express');
var router = express.Router();
const Artist = require('../models/index').artist;

//INDEX
router.get('/', function(req, res) {
    Artist.findAll()
        .then(function(artists) {
            res.send(artists);
    });
});

// router.get('/', async function(req, res) {
//         const artists = await Artist.findAll();
//         res.send(artists);
//     });

//SHOW
router.get('/:id', function(req, res)  {
    Artist.findOne({
        where: { id: req.params.id },
        include: [Painting]
    }
        .then(function(artist) {
            res.send(artist);
        });
});

//CREATE
router.post('/', function(req, res) {
    const { name, img_url, nationality, birth_year, description } = req.body;
    const params = {
        name,
        img_url,
        nationality,
        birth_year,
        description
    }
})