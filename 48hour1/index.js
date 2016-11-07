var
    debug = true, // are we debugging today?
    canvas, // canvas element
    context, // drawing context for canvas element
    lovelyCol, // css color for lovely class
    step, // how big is the grid
    halfWidth, // half the screen width - avoids recalculating
    halfHeight, // half the screen width - avoids recalculating
    minOfHalfWidthHeight, // the smaller of width and height

    // debugging counters
    counters = {
        loop: 0,
        vert: 0,
        horiz: 0
    },

    /* Mouse Position */
    pointer = {
        x: 0, // on screen x
        y: 0, // on screen y
        xOffset: 0, // x relative to screen centre
        yOffset: 0, // y relative to screen centre
        angle: 0, // angle of xy point relative to screen centre (0-2*PI)
        degrees: "todo", // angle of xy point relative to screen centre in degrees
        radius: 1 // distance from centre of mouse point (i.e the hypotenuse)
    },

    /*
     * Grid position
     * To animate th egrid it needs an x and y position that is altered slightly every step..
     * the xStop and yStop values are the upper bounds to which to count when drawing lines...
     * i.e. go from 0 until this and then stop.
     */
    grid = {
        xOffset: 0,
        yOffset: 0,
        xStop: 300,
        yStop: 300
    },

    colours = [
        "#F0F",
        "#88F",
        "#8F8",
        "#808",
    ];

function id() {
    return "UP772629";
}

/*
    The game has a leaderboard which is initialized with various names. During a game it will be necessary to update this leaderboard regularly. Create a function called `updateLeaderBoard` which accepts two parameters, the first is an array of player names, the first ten of which should be inserted into the leaderboard as list items. The second parameter `me` is an optional string that represents the current player's name. If any string in the array exactly matches the second parameter, then set its list item class to be `me`
 */
function updateLeaderBoard(playerNames, userName) {
    // Clear the current list
    while (window.top10.firstChild) {
        window.top10.removeChild(window.top10.firstChild);
    }

    if (playerNames.length > 0) {
        // Go through the list        
        for (var i = 0; i < playerNames.length; i++) {
            if (i <= 9) {
                var li = document.createElement("li");
                li.textContent = playerNames[i];

                if (playerNames[i] == userName) {
                    li.className += "me";
                }

                window.top10.appendChild(li);
            }
        }
    }
}

/*
    When the game is in play, the player's nickname will appear at the top of the screen. Create a function `nickChanged` which updates the content of the `playername` field to match the content of the 'nick' input field. Attach an appropriate eventer to the `nick` field such that `playername` is updated for all input. When attaching the event listener, place that code with the other similar lines in the `init` function.
*/
function nickChanged(event) {
    window.playername.textContent = window.nick.value;
}

/*
    Create a function updateStep which updates the value of the `step` global variable so that it is in sync with the `scalerange` element. Beware that step must be a number or you may see some strange and difficult-to-debug behaviour.
*/
function updateStep() {
    step = parseInt(window.scalerange.value);
}

/*
    Create a function `leaders` that takes one parameter which is the maximum number of results to return. Leaders should return an array of the names currently on the leaderboard.
*/
function leaders(total) {
    var users = [];

    for (var i = 0; i < total; i++) {
        if (i >= window.top10.children.length) {
            break;
        } else {
            users.push(window.top10.children[i].textContent);
        }
    }

    return users;
}

function calculateStops() {
    grid.xStop = grid.xOffset + canvas.width + step;
    grid.yStop = grid.yOffset + canvas.height + step;
}


function scaleRangeChanged(e) {
    // so update scalenumber
    window.scalenumber.value = window.scalerange.value;
    updateStep();
    redraw(e)
}

function scaleNumberChanged(e) {
    // so update scalerange
    window.scalerange.value = window.scalenumber.value;
    updateStep();
    redraw(e)
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    halfWidth = canvas.width / 2;
    halfHeight = canvas.height / 2;
    minOfHalfWidthHeight = Math.min(halfWidth, halfHeight);
    redraw();
}

function mouseMoved(e) {

    // position of the pointer within the canvas
    pointer.x = (e.pageX - canvas.offsetLeft);
    pointer.y = (e.pageY - canvas.offsetTop);


    // position of the pointer relative to the centre of the canvas
    pointer.xOffset = pointer.x - halfWidth;
    pointer.yOffset = pointer.y - halfHeight;

    // TODO calulate angle and unit vector radius
    // based on mouse.xOffset and mouse.yOffset .
    pointer.radius =
        Math.min(
            Math.sqrt(
                Math.pow(pointer.xOffset, 2) +
                Math.pow(pointer.yOffset, 2)
            ),
            minOfHalfWidthHeight
        ) / minOfHalfWidthHeight * step;


    pointer.angle = Math.atan2(pointer.yOffset, pointer.xOffset).toFixed(3);

    /*
        The `pointer` object has a `degrees` property that is currently not maintained. It is intended as a conveience variable that will be used for debugging the `pointer.angle` property. Find where `pointer.angle` is set and next to it, write the necessary code to update `pointer.degrees` so that it gives an integer value (i.e. no decimal places) between 0 and 360. The formula is `angle * 180 / Math.PI`
    */
    pointer.degrees = parseInt(pointer.angle * 180 / Math.PI);
    pointer.degrees = (pointer.degrees < 0) ? pointer.degrees + 360 : pointer.degrees;

    redraw();
}

function handleKeys(e) {
    if (e.code == "KeyD") {
        window.controls.classList.toggle("hidden");
    }
    if (e.code == "KeyL") {
        window.leaderboard.classList.toggle("hidden");
    }
    if (e.code == "KeyP") {
        window.player.classList.toggle("hidden");
    }
}

function redraw(e) {
    calculateStops();
    drawGrid();
    if (debug) {
        drawDebugScaffold();
        feedbackPositions();
    }
}

function feedbackPositions() {
    window.mx.textContent = pointer.x;
    window.my.textContent = pointer.y;
    window.ox.textContent = pointer.xOffset;
    window.oy.textContent = pointer.yOffset;
    window.angle.textContent = pointer.angle;
    window.degrees.textContent = pointer.degrees;
    window.radius.textContent = pointer.radius.toFixed(3);
    window.gv.textContent = counters.vert;
    window.gh.textContent = counters.horiz;
    window.loops.textContent = counters.loop;
}

function loop() {
    counters.loop++;

    // how much to offset the grid by based on the pointer position
    grid.xOffset -= pointer.radius * Math.cos(pointer.angle) / 10;
    grid.yOffset -= pointer.radius * Math.sin(pointer.angle) / 10;

    grid.xOffset %= step;
    grid.yOffset %= step;

    redraw();
    window.requestAnimationFrame(loop);
}


function drawGrid() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.lineWidth = 1;

    //verticals
    var i;
    counters.vert = 0;
    for (i = grid.xOffset; i <= grid.xStop; i += step) {
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        counters.vert++; // keep a tally on vertical gridlines counters
    }

    //horizontals
    counters.horiz = 0;
    for (i = grid.yOffset; i <= grid.yStop; i += step) {
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        counters.horiz++; // keep a tally on horizontal gridlines drawn
    }

    context.strokeStyle = lovelyCol;
    context.stroke();
}


function drawDebugScaffold() {
    drawPointerPos();
    //drawNormalizedMousePosition();
    //drawXYMousePosition();
}

function drawNormalizedMousePosition() {

    // angle
    var
        x = halfWidth + pointer.radius * Math.cos(pointer.angle),
        y = halfHeight + pointer.radius * Math.sin(pointer.angle);

    context.beginPath();
    context.lineWidth = 8;
    context.strokeStyle = "#0f0";
    context.moveTo(halfWidth, halfHeight);
    context.lineTo(x, y);
    context.stroke();

}

function drawXYMousePosition() {
    // mouse position
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "#ff0";
    context.moveTo(halfWidth, halfHeight);
    context.lineTo(halfWidth + pointer.xOffset, halfHeight + pointer.yOffset);
    context.stroke();
}

var currentColour = 0;
function mouseCursorClicked(){
   /*
        The crosshair cursor works fine when using a mouse, however, when playing the game on a tablet we may want to manually show the cursor position. At present a line is drawn from the center of the screen to the pointer position. Replace this so that there is a circle whose centre is at the pointer's xy position, and whose radius is the same as step. Each time the mouse is clicked the circle should change colour, cycling through the `colours` array.
    */    
    (currentColour >= colours.length - 1) ? currentColour = 0 : currentColour++; 
}

function drawPointerPos() {
    context.beginPath();
    context.lineWidth = 4;
    context.arc(pointer.x, pointer.y, step, 0, 2 * Math.PI, false);
    context.strokeStyle = colours[currentColour];
    context.stroke();   
}


function init() {
    canvas = window.c1;
    context = canvas.getContext("2d");
    step = parseInt(window.scalerange.value);

    document.body.classList.add("lovely");

    lovelyCol = window.getComputedStyle(document.querySelector('.lovely')).getPropertyValue("color");


    // listeners
    window.scalerange.addEventListener("input", scaleRangeChanged);
    window.scalenumber.addEventListener("input", scaleNumberChanged);

    // mouse
    canvas.addEventListener("click", mouseCursorClicked);
    canvas.addEventListener("mousemove", mouseMoved);

    // resize
    window.addEventListener("resize", resizeCanvas);

    // keyboard input d,p,l, etc.
    window.addEventListener("keydown", handleKeys);

    // Added event listen to change on keyboard input
    window.nick.addEventListener("input", nickChanged);


    resizeCanvas();
    window.requestAnimationFrame(loop);

}

window.addEventListener("load", init);