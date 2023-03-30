const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;
  return (seconds) => {
    clearInterval(intervalId);
    timerEl.innerHTML = secondsToTimer(seconds);
    intervalId = setInterval(() => {
      seconds--;
      if (seconds === -1) {
        clearInterval(intervalId);
        return;
      }
      timerEl.innerHTML = secondsToTimer(seconds);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();
inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^\d.]/g, "");
});

buttonEl.addEventListener("click", () => {
  let seconds = Number(inputEl.value);
  if (seconds === 0) {
    alert("Введите количество секунд");
    return;
  }
  animateTimer(seconds);
  inputEl.value = "";
});

function secondsToTimer(secondsCount) {
  const seconds = secondsCount % 60;
  const secondsFormated = seconds < 10 ? "0" + seconds : seconds;
  const minutes = ((secondsCount - seconds) / 60) % 60;
  const minutesFormated = minutes < 10 ? "0" + minutes : minutes;
  const hour = Math.floor(secondsCount / 3600);
  const hourFormated = hour < 10 ? "0" + hour : hour;
  return `${hourFormated}:${minutesFormated}:${secondsFormated}`;
}
