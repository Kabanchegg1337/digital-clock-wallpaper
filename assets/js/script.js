const clock = document.getElementById('clock');

setInterval(changeTime, 1000);

function changeTime(){
    const date = new Date();
    clock.dataset.hours = date.getHours();
    clock.dataset.minutes = date.getMinutes();
    clock.dataset.seconds = date.getSeconds();
}