// Q15). Write a function that checks if a given number is a perfect sqaure.
let n=prompt("Enter Number to check if it is a perfect square or not"); //Accepting value from user
n=parseInt(n); //Converting entered number to integer
console.log("Entered Number ", n); 
let s=Math.floor(Math.sqrt(n)); //Calculating the square root of the entered number
s=parseInt(s); //Converting the square root number to integer
console.log("Square Root of the Entered Number is ", s); //Printing square root of the number
if(s*s===n) //Condition checking
{
    console.log("Entered number is perfect square");
}
else{
    console.log("Entered number is not perfect square");
}