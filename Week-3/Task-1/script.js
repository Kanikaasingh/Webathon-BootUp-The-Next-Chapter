let btn=document.querySelector("button");
let color=document.querySelectorAll(".lgt");
let r=document.querySelector("#red");
let y=document.querySelector("#yellow");
let g=document.querySelector("#green");
function reset(){
    r.style.backgroundColor="grey";
    r.style.boxShadow="0 0 0";
    y.style.backgroundColor="grey";
    y.style.boxShadow="0 0 0";
    g.style.backgroundColor="grey";
    g.style.boxShadow="0 0 0";
}
let c=0;
for(i=0;i<3;i++)
    {
        btn.onclick=()=>
            {
            c++;
            if(c==1)
                {
                    r.style.backgroundColor="red";
                    r.style.boxShadow="0 0 30px red";
                }
            if(c==2)
                {
                    y.style.backgroundColor="yellow";
                    y.style.boxShadow="0 0 30px yellow";
                }   
            if(c==3)
                {
                    g.style.backgroundColor="green";
                    g.style.boxShadow="0 0 30px green";
                }
            }
}
document.querySelector("button").ondblclick=reset;
// const click=()=>{
//     r.style.backgroundColor="red";
//     r.style.boxShadow="0 0 30px red";
// };

// btn.addEventListener("click", click);

// btn.addEventListener("click",()=>{
//     g.style.backgroundColor="green";
//     g.style.boxShadow="0 0 30px green";
// });

// btn.removeEventListener("dblclick", click);
// btn.onclick=()=>{
//     if(r.style.backgroundColor="grey")
//     {
//         r.style.backgroundColor="red";
//         r.style.boxShadow="0 0 30px red";
//     }
    
//     if(y.style.backgroundColor="grey")
//     {
//         y.style.backgroundColor="yellow";
//         y.style.boxShadow="0 0 30px yellow";
//     }
//     if(g.style.backgroundColor="grey")
//     {
//         g.style.backgroundColor="green";
//         g.style.boxShadow="0 0 30px green";
//     }
// }