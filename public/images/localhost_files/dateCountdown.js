const days = document.getElementById('days');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

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
  const d = Math.floor(gap / _day);
  const h = Math.floor(gap % _day / _hour);
  const m = Math.floor(gap % _hour / _minute);
  const s = Math.floor(gap % _minute / _second);

  // Change html
  days.innerText = d;
  hrs.innerText = h;
  mins.innerText = m;
  secs.innerText = s;
}

// Call update() every second
setInterval(update, 1000);
