/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should
 use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP772629";
    // e.g. return "UP654321";
}

function fn() {
    return "Stuart";
}

function sn() {
    return "Davidson";
}


/*
 * Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element.
 */

function addTextTo(elem, text){
    elem.textContent = elem.textContent + text;
}

/*
 * Create a function replaceText which gets two parameters: an element and a string. The function should set the content of the given element to the given string.
 */
function replaceText(elem, text){
    elem.textContent = text;
}

/*
 * Create a function `moreBears` that replaces the image of a kitten with the image of a bear. Find the image of the kitten and then set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'.
 */
function moreBears(){
    var image = document.querySelector("#animals");
    image.attributes[1].value = "http://placebear.com/400/200";
    image.attributes[2].value = "A bear.";
    image.attributes[3].value = "A BEAR!";
}

/*
 * Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element.
 */
function setId(elem, text){
    elem.id = text;
    return elem;
}

/*
 * Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element.
 */
function setClass(elem, text){
    elem.classList = text;    
    return elem;
}

/*
 * Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element.
 */
function addAClass(elem, text){
    elem.classList.add(text);
    return elem;
}

/*
 * Create a function `removeAClass` with two parameters, an element and a string. The function will remove the given string's value from the element's classes. The return value of the function must be the given element.
 */
function removeAClass(elem, text){
    elem.classList.remove(text);
    return elem;
}

/*
 * Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name.
 */
function newElement(name){
    var elem = document.createElement(name);
    return elem;
}

/*
 * Create a function `findElementById` which, given one parameter called ID, returns the element that has that id.
 */
function findElementById(ID){
    return document.getElementById(ID);
}

/*
 * Create a function `findElementByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter.
 */
function findElementByQuery(query){
    var elements = document.querySelectorAll(query);
    return elements;
}

/*
 * Create a function `reverseList` that can reverse the content of a list.  The function should take one parameter which is a selector, used to choose which list is reversed (select the list (the UL or OL) not the list items).  Return the selected element.
 */
function reverseList(selector){    
    // get the current list
    var element = document.querySelector(selector);
    
    // Placing it as 2 would make it more efficient.
    for(var i = element.children.length - 2; i >= 0; i--){
        element.appendChild(element.children[i]);
    }
    
    /*for(var i = 0; i < children.length; i++){
        element.insertBefore(children[children.length - 1], children[i]);
    }*/
    
    return element;
}

/*
 * Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to.
 */
function mover(source, destin){
    var source = document.querySelector(source);
    var destin = document.querySelector(destin);
    
    destin.appendChild(source);
}

/*
 * Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of strings that will be turned into list items.
 */
function filler(element, text){
    for(var i = 0; i < text.length; i++){
        var li = document.createElement("li");
        li.textContent = text[i];
        element.appendChild(li);
    }
}

/*
 * Write a function `dupe` that accepts one parameter, a selector.  The function should duplicate the element chosen by the selector (and any children of it).
 */

function dupe(selector){
    // Get the element required before duplication
    var element = document.querySelector(selector);
    var clone = element.cloneNode(true);
    element.parentNode.appendChild(clone);
}

/*
 * Write a function `removeAll` that accepts one parameter, a selector.  All nodes that match that selector should be removed.
 */ 
function removeAll(selector){
    var elements = document.querySelectorAll(selector);
    for(var i = 0; i < elements.length; i++){
        elements[i].remove();
    }
}

/*
 * Write a function `getUserData` that returns an object with information from the #name, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: '30', student: true }.
 */
function getUserData(){
    var object = {};
    
    object.name = window.username.value;
    object.speed = parseInt(window.speed.value);
    object.student = window.student.checked;
    
    return object;
}
