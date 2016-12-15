/**
 * removeFromArray removes the requested index from the array.
 * @param   arr     The array to edit
 * @param   index   The index to remove from the array
 * @returns Array   The new array created with the removed index
 */
function removeFromArray(arr, index){
    var origin = arr.slice();
    origin.splice(index, 1);
    return origin;
}
module.exports.removeFromArray = removeFromArray;