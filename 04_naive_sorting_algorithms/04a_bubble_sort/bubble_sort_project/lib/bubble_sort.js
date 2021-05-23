// Create a function called 'swap' that takes in 3 arguments
// 1st arg: The array that needs sorting
// 2nd arg: The first element that needs to be swapped
// 3rd arg: The second element that needs to be swapped
// The 'swap' function will run if two elements in an array
// are not already sorted
function swap(array, idx1, idx2) {
    // Create a temporary variable to store the first element
    let temp = array[idx1];
    // Store the value in the second element into the first element
    array[idx1] = array[idx2];
    // Store the original value of the first element,
    // now the temp variable, into the second element
    array[idx2] = temp;
    // Return the array
    return array;
}

// Create a function that takes in 1 argument that is an array
// 'bubbleSort' will sort the array in ascending order
// 'bubbleSort' works by 'bubbling' the largest element to the end
// until no further swaps are needed
function bubbleSort(array) {
    // Create a variable that checks if swaps were previously done
    // and set it initially to 'true'
    let swapped = true;

    // Use a while loop that will iterate through the array until
    // no more swaps take place
    while (swapped) {
        // Set the 'swapped' variable to 'false' initially in the
        // while loop as no swaps might occur
        swapped = false;

        // Use a for loop to iterate through the array to check if swaps are needed
        // If no swaps were needed, 'swapped' will remain 'false', meaning
        // the array is sorted
        for (let i = 0; i < array.length - 1; i++) {
            // If two elements are not sorted, swap them
            if (array[i] > array[i+1]) {
                swap(array, i, i+1);
                // 'swap' will return the array with the elements swapped

                // Set the 'swapped' variable to 'true'
                swapped = true;
            }
        }
    }

    // Return the sorted array
    return array;
}


module.exports = {
    bubbleSort,
    swap
};