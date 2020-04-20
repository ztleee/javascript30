const secondsHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360;
  minsHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 ;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);
setDate();
