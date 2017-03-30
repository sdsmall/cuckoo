const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://cuckoo:cuckoo@ds143030.mlab.com:43030/cuckoo');

var Tweet = require('../models/tweet.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('TWEET api works');
});

router.post('/tweet', (req, res) => {
  var tweet = new Tweet();
  tweet.username = req.body.username;
  tweet.text = req.body.text;
  tweet.link = req.body.link;

  tweet.save(function(err) {
    if(err) {
      res.send(err);
    }
    res.send('TWEET ADDED');
  });

  // .post(function(req, res) {
  //
  //         var bear = new Bear();      // create a new instance of the Bear model
  //         bear.name = req.body.name;  // set the bears name (comes from the request)
  //
  //         // save the bear and check for errors
  //         bear.save(function(err) {
  //             if (err)
  //                 res.send(err);
  //
  //             res.json({ message: 'Bear created!' });
  //         });
  //
  //     });

});

router.get('/tweets', (req, res) => {
  Tweet.find(function(err, tweets) {
      if (err)
          res.send(err);
      res.send(tweets);
  });
});

// router.post('/trumptweet', (req, res) => {
//
// });

module.exports = router;
