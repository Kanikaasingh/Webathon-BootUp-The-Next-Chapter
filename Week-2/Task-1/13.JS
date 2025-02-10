// Q13). Write a javascript function to check if a number is a palindrome
let n=prompt("Enter a number to check if it is palindrome or not"); //Input from the user
let c=n; //Copying the entered value
let d=0, rev=0; //Variable initialization
while(n!=0) 
{
    d=n%10; //Extracting the last digit of the number
    rev=rev*10+d; //Condition for reversing the digit
    n=Math.floor(n/10); //Updating the value after exraction
}
if(rev==c) //Checking reversed number with original number
{
    console.log("Entered Number is Palindrome");
}
else
{
    console.log("Entered Number is Not Palindrome");
}