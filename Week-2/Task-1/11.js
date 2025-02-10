// Q11).Write a function that assign grades based on marks using nested if-else
let s=prompt("Enter number of subjects"); //Accepting value from user
let i=0, m=0, t=0;
console.log("Enter Marks");
for(i=0;i<s;i++)
{
    m=prompt(`Enter marks in ${i} Subject`); //Accepting marks from user for each subjects
    m=parseInt(m);//Converting Number to Integer
    t+=m; //Adding marks  
}
if(t>=90) //Condition checking for assigning grades
{
    console.log("Grade = A");
}
else if(t>=80 && t<90)
{
    console.log("Grade = B");
}
else if(t>=70 && t<80)
{
    console.log("Grade = C");
}
else if( t>=60 && t<70)
{
    console.log("Grade = D");
}
else{
    console.log("Fail");
}