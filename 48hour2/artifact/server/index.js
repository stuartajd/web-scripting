'use strict'

var express = require("express");
var app = express();
var utility = require("../utility");

var stories = [];

stories.push({"id": 1, "author": "Luke Skywalker", "title": "Hello world!", "text": "So I decided to join jsbook like everyone else. What does one post here?" });

app.use('/', express.static('webpages', { extensions: ['html'] }));

/**
 * Routes
 */
app.get('/api/stories', getStories);
app.post('/api/stories', postStories);
app.delete('/api/stories', deleteStories);
app.get('/api/stories/newest', newestStories);
app.get('/api/stories/oldest', oldestStories);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


/**
 * Server Functions
 */
function getStories(req, res) {
    stories.sort(function (a, b) {
        return b.id - a.id;
    });

    if (req.query.p) {
        var limited = [];
        var limit = req.query.p * 10;
        for (var i = limit - 10; i < limit; i++) {
            if (stories[i]) {
                limited.push(stories[i]);
            } else break;
        }
        res.send(JSON.stringify(limited));
    } else {
        res.send(JSON.stringify(stories));
    }
}

function postStories(req, res) {
    // NEED TO FIND A NEW WAY TO DO THE ID'S!!!!!!
    var story = {
        "id": stories[stories.length - 1].id + stories.length,
        "author": req.query.author,
        "title": req.query.title,
        "text": req.query.text
    };
    stories.push(story);
    res.send(JSON.stringify(story));
}

function deleteStories(req, res){
    var index = null;
    for(var i in stories){
        if(stories[i].id == req.query.id){
            index = i;
            break;
        }
    }

    if(index == null){
        res.sendStatus(404);
    } else {
        stories = utility.removeFromArray(stories, index);
        res.sendStatus(200);
    }

}

function newestStories(req, res){
    res.send(JSON.stringify(stories[stories.length-1]));
}

function oldestStories (req, res){
    res.send(JSON.stringify(stories[0]));
}