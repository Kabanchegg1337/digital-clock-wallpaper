import "../css/style.css";

const getCssColor = (color) => `rgb(${color})`;
window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.color) {
      const color = getCssColor(
        properties.color.value.split(" ").map((c) => {
          return Math.ceil(c * 255);
        })
      );
      document.body.style.setProperty("--main-color", color);
    }
    if (properties.topgradientcolor) {
      const topColor = getCssColor(
        properties.topgradientcolor.value.split(" ").map((c) => {
          return Math.ceil(c * 255);
        })
      );
      document.body.style.setProperty("--gradient-top-color", topColor);
    }
    if (properties.bottomgradientcolor) {
      const bottomColor = getCssColor(
        properties.bottomgradientcolor.value.split(" ").map((c) => {
          return Math.ceil(c * 255);
        })
      );
      document.body.style.setProperty("--gradient-bottom-color", bottomColor);
    }
    if (properties.logotype) {
      document.getElementById("logo").style.display = properties.logotype.value
        ? "block"
        : "none";
    }
    if (properties.perspective) {
      const app = document.getElementById("app");
      properties.perspective.value
        ? app.classList.remove("no_perspective")
        : app.classList.add("no_perspective");
    }
  },
};

const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(changeTime, 1000);

const getNormalValue = (val) => (val < 10 ? `0${val}` : val);

function changeTime() {
  const date = new Date();
  clock.dataset.hours = getNormalValue(date.getHours());
  clock.dataset.minutes = getNormalValue(date.getMinutes());
  clock.dataset.seconds = getNormalValue(date.getSeconds());
  dateEl.innerText = `${monthNames[date.getMonth()]} ${getNormalValue(
    date.getDate()
  )}-${getNormalValue(date.getMonth() + 1)}-${getNormalValue(
    date.getFullYear()
  )}`;
}
