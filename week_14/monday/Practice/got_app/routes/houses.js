var express = require('express');
var router = epress.Router();
const Houses = require('../models/index').houses;

function getBodyParams(req) {
    const { name, sigil, region } = req.body;
    return {
        name,
        sigil,
        region
    }

}

//INDEX
router.get('/', async (req, res) => {
    const houses = await Houses.findAll();
    res.send(houses);
});

//SHOW
router.get('/:id', function(req, res) {
    House.findById(req.params.id)
        .then(function(house) {
            res.send(house);
        });
});

//CREATE
router.post('/', function(req, res) {
    House.create(getBodyParams(req))
        .then(function(house) {
            res.send(house);
        });
        
});
        
//UPDATE
router.put('/:id', function(req, res) {
    House.findById(req.params.id)
        .then(function(house) {
            house.update(getBodyParams(req))
                .then(function(updatedHouse) {
                    res.send(updatedHouse);

                })
        })
})


//DESTROY
