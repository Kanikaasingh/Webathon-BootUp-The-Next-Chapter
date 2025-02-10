// Q3). Find the largest Number in an Array.
let arr=[2,4,6,3,1,8,0,5,21,7]; //Storing Array Elements
let great=arr.reduce((pre,curr) => { //Arrow function
    return pre>curr? pre:curr; // Checking Greater function
});
console.log("Greatest Number ", great); //Printing Greatest Number in the Array.