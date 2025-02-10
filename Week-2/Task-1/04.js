//Q4). Write a javascript code that calculates the square and cubes from 0 to 10.
let i=0; s=1, c=1; //Initializing Variables
for(i=0;i<=10;i++) //Loop for calculating square
{
    s=i*i; // Calculating Square
    console.log(`Square of ${i} = ` +s); //Printing Square
}
console.log("\n"); //Changing Line 
for(i=0;i<=10;i++) // Loop for calculatingcube
{
        c=i*i*i; //Calulating Cube
        console.log(`Cube of ${i} = ` +c); //Printing Cube
}