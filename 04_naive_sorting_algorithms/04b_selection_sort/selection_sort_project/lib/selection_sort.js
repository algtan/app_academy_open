// The 'swap' function takes 3 arguments
// arg 1: The array with elements that need swapping
// arg 2: The index of the array that needs to be swapped
// arg 3: The other index of the array that needs to be swapped
function swap(arr, index1, index2) {
    // Create a temporary variable to store the value
    // of the first element to be swapped
    let temp = arr[index1];
    // Store the value of the second element in the first element
    arr[index1] = arr[index2];
    // Store the original value of the first element, now
    // the 'temp' variable, into the second element
    arr[index2] = temp;
    // Return the updated array
    return arr;
}

function selectionSort(arr) {
    // Iterate through the indices of the array to swap the smallest
    // value to the beginning of the array such that the array is
    // ordered in ascending order
    // Index 'i' is the first index of the unsorted subarray
    for (let i = 0; i < arr.length - 1; i++) {
        // Create a variable that will store the index of the smallest value
        let smallest = i;

        // Go through the rest of the unsorted subarray
        // and see if any of the elements are smaller than what
        // is currently in the first index of the unsorted subarray
        // Index 'j' is the rest of the unsorted subarray
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        // Swap the current index 'i' with the index with the smallest value
        swap(arr, i, smallest);
    }
    // Return the sorted array
    return arr;
}

console.log( selectionSort([ -1, 4, 3, 7, 2, 3 ]) )

module.exports = {
    selectionSort,
    swap
};