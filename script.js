const enddate="14 feb 2024 04:30 PM";
document.getElementById("end-date").innerText=enddate;
const inputs=document.querySelectorAll("input");
const clock=()=>{
    const end=new Date(enddate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0){
return;
    }
    console.log(diff);
    //converting into days
   const days=(Math.floor(diff/(3600*24)));
   console.log(days);
   inputs[0].value=days;
   //converting into hours
   const hours=Math.floor(diff/3600)%24;
   console.log(hours)
   inputs[1].value=hours;
   //converting into minutes
   const minutes=Math.floor((diff/60)%60);
   inputs[2].value=minutes;
   //convertion into seconds
   const seconds=Math.floor(diff%60);
   inputs[3].value=seconds;


}
setInterval(() => {
    clock()
}, 1000);