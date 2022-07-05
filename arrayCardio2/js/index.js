
let people = [
    {name:"alex",year:1986},
    {name:"jeevan",year:1970},
    {name:"rohit",year:1990},
    {name:"rahul",year:2015}
];

//arraymethods part2
//some and every functions

//some() function checks that atleast one condition satisfies
// lets see by taking that age greater than 18;

const adult = people.some(function(person){
    let currentYear = (new Date()).getFullYear();
    if(currentYear-person.year>18){
        return true;
    }
});
// every() checks that every element in an array.
const allAdults = people.every(function(person){
    let currentYear = (new Date()).getFullYear();
    if(currentYear-person.year>18){
        return true;
    }
});

console.log(adult);
console.log(allAdults);

//find() and findIndexOf()