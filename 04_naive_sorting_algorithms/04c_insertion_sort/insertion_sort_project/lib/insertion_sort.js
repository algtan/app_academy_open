function insertionSort(arr) {
    // Insertion sort begins at the second element (index 1)
    // because the first element (index 0) is trivially sorted

    // We then iterate through the unsorted subarray, starting
    // at index 1
    for (let i = 1; i < arr.length; i++) {
        // Create a key that will capture the current element
        // of the unsorted subarray
        let key = arr[i];

        // Use a while loop to iterate through the
        // sorted subarray to see where the key should be placed
        // Start looking at the sorted subarray at its rightmost element
        let j = i - 1;
        // Keep going through the sorted subarray until to find the
        // right location for 'key'
        while (j >= 0 && arr[j] > key) {
            // If the element of the sorted subarray is smaller
            // than the key, shift the sorted subarray to the right
            arr[j+1] = arr[j];
            // Decrement j
            j--;
        }

        // Once the while loop exits at the index where there
        // is a smaller value than the current key (or when j = -1),
        // place the key after that smaller element
        // or at the beginning of the sorted subarray
        arr[j+1] = key;
    }

    // Return the sorted array
    return arr;
}

console.log(insertionSort([1, 4, 3, 2]))

module.exports = {
    insertionSort
};