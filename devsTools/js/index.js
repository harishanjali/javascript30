// console.log types

//regular
console.log("hello world");

//Interpolated
console.log('hello i am a %s string','+po');

//styled console
// %c for styling
console.log('%c i am special text','font-size:35px;background-color:green;text-shadow:0 0 5px aqua;');

//warning!!!
console.warn("wrong input");

//error!!1
console.error('promise not handled properly');

//info
console.info("This is console box");

//testing
//this is like a condition
console.assert(1===2,'that is wrong');

//clearing console
// console.clear()

//viewing dom elements
const paragraph = document.querySelector("p");
console.dir(paragraph);

//grouping together
for(let i=0;i<=1;i++){
    console.groupCollapsed("devs");
    console.log("react");
    console.log("js");
    console.groupEnd("dollar");
}

//counting
console.count("harish");
console.count("harish")
console.count("harish")
console.count("krishnapuram");

//timing
console.time("fetching time");

//table
console.table(new Array(1,2,3,4,5));