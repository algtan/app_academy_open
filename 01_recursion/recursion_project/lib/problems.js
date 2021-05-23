// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
    // Set the base cases
    // Base case when n = 0
    if (n === 0) {
        return 2;
    // Base case when n = 1
    } else if (n === 1) {
        return 1;
    }

    // Recursive case from n = 3 onward
    return lucasNumber(n-1) + lucasNumber(n-2);
}


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
    // Input is an array, so we recursively need to have an array as an argument
    // Somehow, we need a subarray

    // Base cases
    // If the array is empty, return 0
    if (array.length === 0) {
        return 0;
    // Once the array length is 1, that is the base case when the array isn't empty
    } else if (array.length === 1) {
        return array[0];
    }

    // Recursive case
    // Create a variable for the last element
    let lastEl = array.length - 1;
    // Create a variable for a subarray that doesn't contain the last element
    let subArray = array.slice(0, array.length - 1);
    // Return the last element plus recursion of the subarray
    return array[lastEl] + sumArray(subArray);
}


// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
    // The argument is a string, so we will need to
    // return reverseString(new String) at the end somehow

    // Base cases
    // If the string is empty, return an empty string
    if (str.length === 0) {
        return '';
    // Once the string is of length 1, that is the base case when the string isn't empty
    } else if (str === 1) {
        return str.charAt(0);
    }

    // Recursive case
    // We want to grab the last letter as a string
    // Create a variable to store the last letter
    let lastLetter = str.charAt(str.length - 1);
    // Create a variable to store a substring
    let subString = str.substr(0, str.length - 1);
    // And concat the rest of the letters to that letter
    return lastLetter.concat( reverseString(subString) );
}


// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
function pow(base, exponent) {
    // Base case is when the exponent is equal to zero
    if (exponent === 0) {
        // Anything to the power of zero is 1. Return 1
        return 1;
    }

    // Conditionals to check if the exponent is negative
    // If the number is negative, return the reciprical
    if (exponent < 0) {
        return 1 / pow(base, Math.abs(exponent));
    }

    // Recursive case
    return base * pow(base, exponent - 1);
}


// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    // Base case
    // Takes place when data is not an array
    if (!Array.isArray(data)) {
        // Return the flattened array
        return [data];
    }

    // Store a variable for a new empty array
    let newArr = [];

    // Recursive case
    // Go through the internal array using a for loop
    for (let i = 0; i < data.length; i++) {
        // Concat the arrays together using what has been
        // added to the new array so far
        newArr = newArr.concat( flatten(data[i]) );
    }
    // Return the new array once we go through all the elements in the original array
    return newArr;
}

// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// console.log(flatten(array_1))      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// console.log(flatten(array_2))      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

// console.log(flatten('base case'))  // => [ 'base case' ]


// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
function fileFinder(directories, targetFile) {
    // For loop to iterate through the object's keys
    for (let key in directories) {
        // Log the key value pairs
        // console.log(`${key}, ${directories[key]}`)

        // When the file is found, we want to return true and break out of the for..in loop.
        // If the file has not been found yet, we want to keep iterating inside
        // the for..in loop. Once we go through all the keys (complete all iterations)
        // is when we want to return false. Otherwise, once we get to the first file
        // and false is returned, we won't check the remaining folders/files.
        
        // Base case is when the file is found
        if (key === targetFile) {
            return true;
        }

        // Recursive case happens when there is an embedded object
        // (a directory inside the parent directory)
        // We want to check IF the file exists before
        // having the function return true
        if (fileFinder(directories[key], targetFile)) {
            // Don't want to return false, as the loop will stop once
            // it reaches the first file
            // And only if we find the file, do we want the function
            // to return true
            return true;
        }
    }

    // Return false if the file isn't found
    return false;
}

// console.log( fileFinder(desktop, 'app_academy_logo.svg') );     // => true
// console.log( fileFinder(desktop, 'everlong.flac') );            // => true
// console.log( fileFinder(desktop, 'sequoia.jpeg') );             // => false


// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {
    // For loop to iterate through the object's keys
    for (let key in directories) {
        // Log the key value pairs
        // console.log(`${key}, ${directories[key]}`)

        // When the file is found, we want to return a string with the file name
        // and break out of the for..in loop.
        // If the file has not been found yet, we want to keep iterating inside
        // the for..in loop. Once we go through all the keys (complete all iterations)
        // is when we want to return 'null'.
        
        // Base case is when the file is found
        if (key === targetFile) {
            return '/'.concat(targetFile);
        }

        // Recursive case happens when there is an embedded object
        // (a directory inside the parent directory), and we want
        // to check if the file is contained within (not null)
        // We want to check IF the file even exists first before
        // we return the full file path
        if ( pathFinder(directories[key], targetFile) ) {
            // If the file does exist, then
            // we will want to return the key, plus whatever is inside
            // the key if the file is found
            return key.concat( pathFinder(directories[key], targetFile) );
        }
    }

    // Return null if the file isn't found
    return null;
}

// console.log( pathFinder(desktop, 'trixie_lou.jpeg') );     // => '/images/pets/trixie_lou.jpeg'
// console.log( pathFinder(desktop, 'everlong.flac') );       // => '/music/genres/rock/everlong.flac'
// console.log( pathFinder(desktop, 'honeybadger.png') );     // => null


module.exports = {
    lucasNumber,
    sumArray,
    reverseString,
    pow,
    flatten,
    fileFinder,
    pathFinder
};