// Q1). Write a function tha takes an input of item prices and returns the total bill
let n=prompt("Enter number of Items"); //Number of items
let i=0, p=0, bill=0; //Varibale initialization
for(i=1;i<=n;i++)
{
    p=prompt(`Enter price of ${i} items`); //Accepting price for each item
    p=parseInt(p); //Converting entered number to integer
    bill=bill+p; //Adding prices
}
console.log(`Price of ${n} items is `+bill); //Printing total bill