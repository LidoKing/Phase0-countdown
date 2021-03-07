const set = document.getElementById('set');
const timerMins = document.getElementById('timerMins');
const timerSecs = document.getElementById('timerSecs');
const timerHours = document.getElementById('timerHours');

let time;
let goal;
let gap;
let control;

function setGoal() {
  time = set.value;
  gap = time * _minute;
  console.log(gap)
  control = setInterval(startTimer, 1000);
}

function startTimer() {
  gap -= 1000;
  const h = String(Math.floor(gap % _day / _hour)).padStart(2, '0');
  const m = String(Math.floor(gap % _hour / _minute)).padStart(2, '0');
  const s = String(Math.floor(gap % _minute / _second)).padStart(2, '0');

  timerHours.innerText = h;
  timerMins.innerText = m;
  timerSecs.innerText = s;

  if (s <= 0) {
    clearInterval(call);
    alert('Time is up!!!');
  }

  console.log(gap, h, m, s);
}
