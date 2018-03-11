var express = require('express');
var router = express.Router();


const Card = require('../models/index').card;

function destructureData (req) {
    const { title, description, status } = req.body;
    return {
        title,
        description,
        status
    }
};

/* GET users listing. */
router.get('/', function(req, res) {
    Card.findAll()
        .then(function(card) {
            res.send(card);
        });

});

//INDEX
router.get('/:id', function (req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            res.send(card);
        });
});

//CREATE
router.post('/', function(req, res) {
    Card.create(destructureData(req))
        .then(function(card) {
            res.send(card);
        });
});

//UPDATE
router.put('/:id', function(req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            card.update(destructureData(req))
                .then(function(updatedCard) {
                    res.send(updatedCard);
                });
        });
});

//DELETE

router.delete('/:id', function(req, res) {
    Card.findById(req.params.id)
        .then(function(card) {
            card.destroy();
                console.log('card has been removed')
        });
});

module.experts = router;
