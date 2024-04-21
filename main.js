let daysItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#min");
let secItem=document.querySelector("#sec");
let countdown=()=>{
    let FutureDate=new Date( " 1 Jan 2025");
    let CurrentDate=new Date();
    let MyDate=FutureDate-CurrentDate;
     //console.log(MyDate)
    let days=Math.floor(MyDate/1000/60/60/24);
    let hours=Math.floor(MyDate/1000/60/60) %24;
    let min=Math.floor(MyDate/1000/60)%60;
    let sec=Math.floor(MyDate/1000)%60;
    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;


}
countdown();
setInterval(countdown,1000)