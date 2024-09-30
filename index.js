// Reverse a String

 function reverse(s) {
     return s.split('').reverse().join('');
 }

 console.log(reverse("younes ait abdel malek"));


//  Count Characters
function count(s) {
    return s.length;
}
console.log(count("ait abdel malek younes aymen ")); 



// Capitalize Words
function capitalizeWords(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello my name is younes ")); 


// Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}


const numbers = [-5.5,310, 511,800  , -5];
console.log(findMaximum(numbers)); 
console.log(findMinimum(numbers)); 


// Sum of Array
function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfArray(numbers)); 




// Filter Array

function filterArray(arr, condition) {
    return arr.filter(condition);
}

const filtered = filterArray(numbers, num => num > 0);
console.log(filtered); 


// Factorial
function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

// Prime Number Check

function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

console.log(isPrime(5)); 
console.log(isPrime(10)); 


// Fibonacci Sequence

function fibonacciSequence(terms) {
    const sequence = [];
    for (let i = 0; i < terms; i++) {
        if (i === 0) sequence.push(0);
        else if (i === 1) sequence.push(1);
        else sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


console.log(fibonacciSequence(20)); 



