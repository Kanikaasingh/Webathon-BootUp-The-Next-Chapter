// Q1). Write a function tha takes an input of item prices and returns the total bill
let n=prompt("Enter number of Items");
let i=0;
let p=0;
let bill=0;
for(i=0;i<n;i++)
{
    p=prompt(`Enter price of ${i} items`);
}

bill=p.reduce((pre,curr));
console.log(`Price of ${n} items is `+bill);