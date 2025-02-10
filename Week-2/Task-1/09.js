// Q9). Write a javascript function thta checks whether a number is prime
let n= prompt("Enter a Number to check whether it is prime or not"); //Accepting Value from User
let f=0, i=0; //Initializing Variable
for(i=0;i<=n;i++)
{
    if(n%i==0) //Calculating number of factors of the entered Number
    {
        f++; //Increasing Factor Counter
    }
}
if(f==2) //Condition check for Prime Numbers
{
    console.log(`${n} is a Prime Number`);
}
else{
    console.log(`${n} is not a Prime Number`);
}