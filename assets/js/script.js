const clock = document.getElementById('clock');
const dateEl = document.getElementById('date');

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

setInterval(changeTime, 1000);

const getNormalValue = val => val < 10 ? `0${val}` : val;

function changeTime(){
    const date = new Date();
    clock.dataset.hours = getNormalValue(date.getHours());
    clock.dataset.minutes = getNormalValue(date.getMinutes());
    clock.dataset.seconds = getNormalValue(date.getSeconds());
    dateEl.innerText = `${monthNames[date.getMonth()]} ${getNormalValue(date.getDate())}-${getNormalValue(date.getMonth())}-${getNormalValue(date.getFullYear())}`
}