const days = document.getElementById('days');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const countdown = document.getElementById('countdown');
const reached = document.getElementById('reached');
const state = document.getElementById('state');

// Seconds past since January 1, 1970 till deadline
const deadline = new Date(2020, 11, 1, 0, 0, 0).getTime();

function update() {
  // Seconds past since January 1, 1970 till now
  const now = new Date().getTime();

  // Seconds left till deadline from now
  const gap = deadline - now;

  // Declaring facts (how many seconds for each unit)
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  // Convert gap back to days, hours, minutes and seconds
  const d = String(Math.floor(gap / _day)).padStart(2, '0');
  const h = String(Math.floor(gap % _day / _hour)).padStart(2, '0');
  const m = String(Math.floor(gap % _hour / _minute)).padStart(2, '0');
  const s = String(Math.floor(gap % _minute / _second)).padStart(2, '0');

  // Change html
  days.innerText = d;
  hrs.innerText = h;
  mins.innerText = m;
  secs.innerText = s;

  if (s < 0) {
    countdown.style.display = 'none';
    reached.style.display = 'block';
    state.innerText = 'target reached!';
  }
}

// Call update() every second
setInterval(update, 1000);
