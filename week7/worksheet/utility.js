function add(a,b) {
  return a+b;
}
module.exports.add = add;

function compare(pArray1, pArray2){
    if(pArray1.length == 0 || pArray2.length == 0) { return false; }
    for(var i=0; i < pArray1.length; i++){
        if(pArray1[i] != pArray2[i]){
            return false;
        }
    } 
    return true;
}
module.exports.compare = compare;

/*
 * Takes an array, sorts it in order & returns the highest number
 */
function largest(pArray){
    pArray.sort(function(a, b) { return b-a });
    return pArray[0];
}
module.exports.largest = largest;