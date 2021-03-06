/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP772629";
}

/*
 * Create a `drawLines` function to draw two parallel lines.
 * The first line should begin at a point 100 pixels to the right of, the origin (i.e. 0,0) and 100 pixels below it.
 * It should be 400 pixels long. The second line should run parallel to the first line, exactly 100 pixels below it.
 * It should start at a point 100 pixels from the edge of the canvas and be 200 pixels long.
 */
function drawLines(canvas){
    var canvas = canvas.getContext("2d");
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.lineTo(500, 100);
    canvas.stroke();
    
    canvas.beginPath();
    canvas.moveTo(100, 200);
    canvas.lineTo(300, 200);
    canvas.stroke();
}

/*
 * Create a function `drawTriangle` that takes seven parameters: a canvas element, and x1, y1, x2, y2, x3, y3.
 * The function draws a red triangle, filled solid with green, between the three points given by the parameters.
 */
function drawTriangle(canvas, x1, y1, x2, y2, x3, y3){
    var canvas = canvas.getContext("2d");
    canvas.beginPath();
    canvas.fillStyle = "#00ff00";
    canvas.strokeStyle = "red";
    canvas.moveTo(x1, y1);
    canvas.lineTo(x2, y2);
    canvas.lineTo(x3, y3);
    canvas.lineTo(x1, y1);
    canvas.fill();
    canvas.stroke();
}

/*
 * Create a function `drawSpartacus` that takes one parameter, a canvas element.
 * The function will draw the stick figure Spartacus on the provided canvas. Make sure he wields a sword in his hand.
 * For convenience, index.js contains a function `drawStickFigure` that does most of the job, given a canvas element.
 * Challenge: make him walk around.
 */
function drawSpartacus(canvas){

}

/*
 *  Write a drawGrid function that fills the canvas with a grid to make squares 50px big.
 */
function drawGrid(canvas){
    var c = document.getElementById(canvas);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    Try it Yourself »

}

/*
 * Write a drawCzechFlag function to draw the Czech flag.
 */
function drawCzechFlag(pCanvas){
    var canvas = pCanvas.getContext("2d");
    
    // Draw Red Section
    canvas.beginPath();
    canvas.fillStyle = "red";
    canvas.strokeStyle = "red";
    canvas.moveTo(canvas.height / 2, 0);
    canvas.lineTo(canvas.height / 2, canvas.width);
    canvas.lineTo(canvas.height, canvas.width);
    canvas.lineTo(canvas.height / 2, 0);
    canvas.fill();
    canvas.stroke();
    
    // Draw Blue Section
    
}

/*
 *  Create a function `showMessage` that takes two parameters: an element and a string that is a URL. 
 *  The function will retrieve the URL with a synchronous request and put the response text into the text content of the provided element.
 */
function showMessage(elementID, URL){
    var xhr = new XMLHttpRequest();
	xhr.open("GET", URL, false);
	xhr.send();
    
    document.getElementById(elementID).textContent = xhr.responseText;
}

/*
 *  Create a function `showList` that takes two parameters: an element and a string that is a URL. 
 *  The function will retrieve the URL with a synchronous request, parse the retrieved data as JSON;  
 *  the data is guaranteed to be an array of string. The function will then, like the `filler` 
 *  function in `ws_dom`, put the contents of the array as list items into the provided element.
 */
function showList(elementID, URL){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL, false);
    xhr.send();
    
    for(var i = 0; i < xhr.responseText.length; i++){
        var li = document.createElement("li");
        li.textContent = xhr.responseText[i];
        elementID.appendChild(li);
    }
}

// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawStickFigure(el, x, y, facing) {
  var c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face


  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-40)
    line(c, x+20, y, x, y-40)
  }

  function drawFace(c, x, y, facing) {
    // if the `facing` parameter is not given, the stick figure will face towards us
    if (facing == null) facing = 90;

    // make sure the `facing` parameter is between 0 and 360
    facing = facing % 360; // that's like the mathematical remainder after a division
    if (facing < 0) facing += 360;

    if (facing > 180) return;  // facing away from us, don't draw a face

    // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
    var faceOffset = 0;
    if (facing <= 180) {
      faceOffset = (facing-90)/9;
    }

    circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
    circle(c, x+7-faceOffset, y-5, 1)

    // decrease the smile size here
    var smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
    var startAngle = rad(90-smileSize/2-2*faceOffset)
    var endAngle   = rad(90+smileSize/2-2*faceOffset)
    arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
  }

  // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // draw a circle on canvas context `c`, centered on x,y, with radius r
  // also fill the circle with white (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath()
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
  }


  // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
  function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false)
    c.stroke();
  }

  // convert from degrees to radians
  function rad(x) {
    return x * Math.PI / 180;
  }

}