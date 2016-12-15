'use strict'

var express = require("express");
var app = express();
var utility = require("../utility");

var stories = [];

// Push the initial server files
stories.push({"id": 1, "author": "Luke Skywalker", "title": "Hello world!", "text": "So I decided to join jsbook like everyone else. What does one post here?" });

/*
    EXPRESS WEB ROUTES
 */
app.get('/api/stories', getStories);
app.post('/api/stories', postStories);
app.delete('/api/stories', deleteStories);
app.get('/api/stories/newest', newestStories);
app.get('/api/stories/oldest', oldestStories);

// Serve the static HTML pages
app.use('/', express.static('webpages', { extensions: ['html'] }));

// Run the server on port 8080
app.listen(8080);

/*
    SERVER FUNCTIONS
 */

/**
 * getStories() function returns either the full story list,
 *  or returns the list from a specific number to paginate the system.
 */
function getStories(req, res) {
    var listStories = stories.slice();

    listStories.sort(function (a, b) {
        return b.id - a.id;
    });

    if (req.query.p) {
        var limited = [];
        var limit = req.query.p * 10;
        for (var i = limit - 10; i < limit; i++) {
            if (listStories[i]) {
                limited.push(listStories[i]);
            } else break;
        }
        res.send(JSON.stringify(limited));
    } else {
        res.send(JSON.stringify(listStories));
    }
}

/**
 * postStories() function to add the requested story to the system,
 *  assigning an ID to the JSON before returning the added story.
 */
function postStories(req, res) {
    var story = {
        "id": stories.length + 1,
        "author": req.query.author,
        "title": req.query.title,
        "text": req.query.text
    };
    stories.push(story);
    res.send(JSON.stringify(story));
}

/**
 * deleteStories() checks to see if the specific story exists, if it does it will call the removeFromArray function
 *  otherwise it will return a 404 error.
 */
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

/**
 * newestStories() returns the latest story within the stories array.
 */
function newestStories(req, res){
    res.send(JSON.stringify(stories[stories.length-1]));
}

/**
 * oldestStories() returns the oldest story within the stories array.
 */
function oldestStories (req, res){
    res.send(JSON.stringify(stories[0]));
}
