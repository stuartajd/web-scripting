/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

/*
 * Returns my Student ID
 */
function id() {
    return "UP772629";
}

/*
 * Returns my First Name
 */
function fn() {
    return "Stuart";
}

/*
 * Returns my Second Name
 */
function sn() {
    return "Davidson";
}

/* 
 * Takes 2 numbers & returns the sum
 */
function add(num1, num2){
    return num1+num2;
}

/*
 * Takes 2 numbers & returns the first - the second
 */
function subtract(num1, num2){
    return num1-num2;
}

/*
 * Takes an object & updates the checked JSON to true
 */
function checkObject(object){
    object.checked = true;
}

/*
 * Takes an object & checks if the data exists, then set the checked to true
 */
function checkObjectInside(object){
    if(object.data){
        object.data.checked = true;
    }
}

/*
 * Takes an array, index & value to update the current array item
 */
function arraySet(pArray, pIndex, pValue){
    if(pArray[pIndex]){
        pArray[pIndex] = pValue;
    }
}

/*
 * Takes an array and returns the sum of all the numbers in the array
 */
function addAll(pArray){
    var res = 0;
    for(var i=0;i<pArray.length;i++){
        res += pArray[i];
    }
    return res;
}

/*
 * Takes two numbers and returns the larger number of the two
 */
function larger(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

/*
 * Takes an array, sorts it in order & returns the highest number
 */
function largest(pArray){
    pArray.sort(function(a, b) { return b-a });
    return pArray[0];
}

/*
 * Takes two arrays and compares each index to eachother, returning true if they match
 */
function compare(pArray1, pArray2){
    for(var i=0; i < pArray1.length; i++){
        if(pArray1[i] != pArray2[i]){
            return false;
        }
    } 
    return true;
}

/*
 * Takes an array, adds the param num to each item then returns the same array
 */
function addToAll(pArray, num){
    // Take array
    // Add one
    // Return Array
    for(var i = 0; i < pArray.length; i++){
        pArray[i] += num;
    }
    return pArray;
}

/*
 * Updates the global variable remembered to the parameter
 */
var remembered;
function rememberThis(param){
    remembered = param;
}

/*
 * Creates a numbered array with the upper bound as N parameter
 */
function nArray(n){
    var array = [];
    for(var i = 0; i < n; i++){
        array.push(i+1);
    }
    return array;
}

/*
 * Takes an array, check if it is more than 0 & exists then return the sum of the array
 */
function addAllOpt(pArray){
    if(!pArray || pArray.length == 0){
        return 0;
    } else {
        var sum = 0;
        for(var i = 0; i < pArray.length; i++){
            sum += pArray[i];
        }
        return sum;
    }
}

/*
 * Takes an array & the divisor, returns an array of all the numbers that are divisable by the divisor parameter
 */
function divisors(pArray, divisor){
    var divisorArray = [];
    for(var i = 0; i < pArray.length; i++){
        if(pArray[i] % divisor === 0){
            divisorArray.push(pArray[i]);
        }
    }
    return divisorArray;
}

/*
 * Takes two parameters then returns an array of all the multiples of that number from 1*n to m*n
 */
function multiples(n, m){
    var multiplesArray = [];
    for(var i = 0; i < m; i++){
        multiplesArray.push((i + 1) * m);
    }
    return multiplesArray;    
}