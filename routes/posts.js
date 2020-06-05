const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => { //CAN TAKE AWAY THE POSTS AFTER THE BACKSLASH CUZ APP.JS REFERS ONLY WHEN IN /POSTS.
    res.send('We are on posts');
});

router.get('/specific', (req, res) => {

    res.send('Specific Post is here.');
});


router.post ('/', (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //LOOK UP STATUS CODES FIOR CATCH ERRORS
    
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
    
});



module.exports = router;