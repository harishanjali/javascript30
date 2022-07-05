
//about map function

//creates a new array from calling a function for every array element.
//calls a function once for each element in an array.
//does not execute the function for empty elements.
//does not change the original array.

//we are going to get the each number square in array by map function.

let numbers = [1,2,3,4,5,6];

function getSquaredNums(num){
    return num*num;
}
let squaredArray = numbers.map(getSquaredNums);

console.log(squaredArray);

//about filter function

//method creates a new array filled with elements that pass a test provided by a function.
//method does not execute the function for empty elements.
//method does not change the original array.

// we are going to get ages above 18 by filter method

let ages = [5,18,21,56,73,8,25,22,""];

function getAgeAboveEighteen(ages){
    if(ages>=18){
        return ages;
    }
}
let aboveEighteen = ages.filter(getAgeAboveEighteen);
console.table(aboveEighteen);

//about reduce function

//syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//method executes a reducer function for array element.
//method returns a single value: the function's accumulated result.
//method does not execute the function for empty array elements.
//method does not change the original array.

let salaries = [30000,40000,45000,50000,65000,110000]

// we are going to get the sum of all salaries by using the reduce function.

function getSumOfSalaries(total,eachSalary){
    return total + eachSalary;
}

let sumOfsalaries = salaries.reduce(getSumOfSalaries,0);

console.log(sumOfsalaries);

//about sort function.

//sorts the elements of an array.
//overwrites the original array.
//sorts the elements as strings in alphabetical and ascending order.

// for strings

let characters = ["a","c","B","z"];

console.log(characters);
characters.sort();
console.log(characters);// getting by comapring unicode values for strings and also for combination of strings and numbers.


//for numbers

let listNum = [23,1,45,100,34,67];
console.log(listNum);
listNum.sort();
console.log(listNum);// sorting ascending order

// what if we want descending order

//1st way;

listNum.reverse();
console.log(listNum);

//2nd way;
let listNumbers = [23,1,45,100,34,67];

listNumbers.sort(function(a,b){
    if(a>b){
        return b-a;
    }
});

console.log(listNumbers);// descending order;

// we can also use this for objects which are in arrays;
