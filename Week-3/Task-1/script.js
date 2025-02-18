let light=document.querySelectorAll(".lgt");
let i=0;
let re=document.querySelector("#refresh");
let automode=false;
let autoInterval;
let timings=[5000, 2000, 4000];
let btn=document.querySelector("#next");

function reset(){
    i=0;
    light.forEach(light => light.classList.remove("active")); 
    light.forEach(light => light.classList.remove("shadow"));
}

re.onclick=()=>{
    reset();
}
function changelgt()
{
    light.forEach(light => light.classList.remove("shadow"));
    light[i].classList.add("shadow"); 
    light.forEach(light => light.classList.remove("active")); 
    light[i].classList.add("active"); 
}

function nextLgt()
{
    changelgt();
    i++;
}

btn.onclick=()=>
{
    nextLgt();
}


document.getElementById("auto").addEventListener("click", () => {
if (automode) 
{
    clearInterval(autoInterval); 
    document.getElementById("#auto").innerText = "Auto Mode";
}
else
{
    changelgt(); 
    autoInterval = setInterval(nextLgt, timings[i]);
    document.getElementById("#auto").innerText = "Stop Auto Mode"; 
}
    automode = !automode; 
});