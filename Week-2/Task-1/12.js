// Q12). Write a function that prints the multiplication table of a number using a while loop.
let n=prompt("Enter Number"); //Accepting number from user of the number whose multiplication table is to be printed
let i=1; 
while(i!=11) //Printing multiplication table of the number from 1 to 10
{
    console.log(`${n} x ${i} =`, n*i);
    i++; 
}