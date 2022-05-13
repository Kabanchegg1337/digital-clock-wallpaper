const clock = document.getElementById('clock');

setInterval(changeTime, 1000);

const getNormalValue = val => val < 10 ? `0${val}` : val;

function changeTime(){
    const date = new Date();
    clock.dataset.hours = getNormalValue(date.getHours());
    clock.dataset.minutes = getNormalValue(date.getMinutes());
    clock.dataset.seconds = getNormalValue(date.getSeconds());
}