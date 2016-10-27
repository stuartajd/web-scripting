/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
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
    Create a function `targetTextToConsole` that takes one parameter `event` and writes the text content of `event.target` to the console. Create a second function tttcAttacher. tttcAttacher should set `targetTextToConsole` as the event handler for the click event on `button0` - thus when the `Click Me` button is pressed, `Click Me` should appear on the console.
 */
function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    window.button0.addEventListener("click", targetTextToConsole);
}

/*
    Create a function `lovelyParaAttacher` that attaches an event listener to the `thisisalovelyparagraph` element. When the paragraph is clicked the `lovelyToggle` function should be invoked. You can find lovelyToggle in the `assess.events.js` file.
 */
function lovelyParaAttacher(){
    window.thisisalovelyparagraph.addEventListener("click", lovelyToggle);
}

/* 
    Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` element. When `button1` is clicked the `lovelyToggle` function should be invoked.
 */
function lovelyButtonAttacher(){
    window.button1.addEventListener("click", lovelyToggle);
}

/* 
    Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements. Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.
 */
function concatAttacher(){
    window.in1.addEventListener("change", concatAttacherFunc);
    window.in2.addEventListener("change", concatAttacherFunc);
}

function concatAttacherFunc(event){
    window.out1.textContent = window.in1.value + window.in2.value;
}

/*
    The div `mousewatcher` contains a paragraph `snitch`. When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`. Write a function `snitchAttacher`. `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.
 */
function snitchAttacher(){
    window.mousewatcher.addEventListener("mouseover", snitchUpdater);
    window.mousewatcher.addEventListener("mouseout", snitchUpdater);
}

function snitchUpdater(event) {
  if (event.type == 'mouseover') {
    window.snitch.textContent = "IN";
  }
  if (event.type == 'mouseout') {
    window.snitch.textContent = "OUT";
  }
}

/*
    The div `mousereporter` contains a paragraph `report`. When the mouse is anywhere over `mousereporter`, the `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`. 
    
    Write a function `reportAttacher` that associates the the mouseover event with a `reporterUpdater` function. 
    
    Also write the reporterUpdater function (you may wish to base this on `snitchUpdater`) which receives an single event object parameter and used the data in this object to update populate the `report` element. Hint: there are screenX and screenY properties in the event object.
 */
function reportAttacher(){
    window.mousereporter.addEventListener("mousemove", reportUpdater);
}

function reportUpdater(event){
    if(event.type == 'mousemove'){
        window.report.textContent = "x: " + event.screenX + " y: " + event.screenY;
    }
}

/*
    The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them, so the field needs to report when the user has a space in there. 
    
    Write a function `idValidationAttacher` that gives the `newid` input field an event handler that checks the value whenever it has changed (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the `newid` input element, so that an error message shows.
 */
function idValidationAttacher(){
    window.newid.addEventListener("input", idValidationAttacherFunc);
}   
function idValidationAttacherFunc(event){
    var hasSpaces = false;
    for(var i in event.target.value){
        if(event.target.value[i] == " "){
            hasSpaces = true;
            break;
        } else {
            hasSpaces = false;
        }
    }
    if(hasSpaces){
        window.newid.className = "invalid";
    } else {
        window.newid.className = "";
    }
}
