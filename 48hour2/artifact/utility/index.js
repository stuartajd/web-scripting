function removeFromArray(arr, index){
    var origin = arr.slice();
    origin.splice(index, 1);
    return origin;
}
module.exports.removeFromArray = removeFromArray;