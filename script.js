const daysEl =document.getElementById('days')
const hoursEl =document.getElementById('hours')
const minsEl =document.getElementById('mins')
const secondsEl =document.getElementById('seconds')



const newYear ="1 Jan 2023";
function countDown(){

let currentDate = new Date();
let newYearDate = new Date(newYear);
let totalSeconds = (newYearDate-currentDate)/1000;

let days = Math.floor(totalSeconds/3600/24)
let hours = Math.floor(totalSeconds/3600)%24;
let mins = Math.floor(totalSeconds/60)%60;
let seconds = Math.floor(totalSeconds)%60;

daysEl.innerHTML = formatTime(days);
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);


}
countDown();

setInterval(countDown,1000)
function formatTime (time){
  return time<10 ? `0${time}`: time;
}