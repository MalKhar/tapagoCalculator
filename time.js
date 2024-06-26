function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let currentTime = `${hours}:${minutes}:${seconds}`;

  return currentTime;
}

function showClock() {
  let showClock = updateClock().split(":");
  showClock[0] < 10 ? (showClock[0] = "0" + showClock[0]) : showClock[0];
  showClock[1] < 10 ? (showClock[1] = "0" + showClock[1]) : showClock[1];
  showClock[2] < 10 ? (showClock[2] = "0" + showClock[2]) : showClock[2];

  let showHours = showClock[0];
  let showMinutes = showClock[1];
  let showSeconds = showClock[2];

  let showTime = `${showHours}:${showMinutes}:${showSeconds}`;

  return showTime;
}

function setClock() {
  document.querySelector(".clock").innerHTML = showClock();
}
setClock();
setInterval(updateClock, 1000);
setInterval(setClock, 1000);

function calcTimeLeft(timeToGo) {
  let currentTimeArray = updateClock().split(":");
  let timeToGoArray = timeToGo.split(":");

  if (currentTimeArray[2] < 10) {
    currentTimeArray[2] = "0" + currentTimeArray[2];
  } else {
  }
  let currentHourInSeconds =
    (currentTimeArray[0] * 3600 +
      currentTimeArray[1] * 60 +
      currentTimeArray[2]) /
    100;

  let timeToGoInSeconds =
    (timeToGoArray[0] * 3600 + timeToGoArray[1] * 60 + timeToGoArray[2]) / 100;

  let difference = timeToGoInSeconds - currentHourInSeconds;

  let result = difference / 60;
  return Math.round(result);
}

setInterval(() => {
  calcTimeLeft("14:00:00");
}, 1000);

export { calcTimeLeft, showClock };
