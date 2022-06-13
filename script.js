let second = 0,
  minute = 00,
  hour = 0,
  ms = 1000;
let h1 = document.querySelector('h1')
let sec = document.querySelector('.Segundo')
let min = document.querySelector('.Minuto')
let hr = document.querySelector('.Hora')
let title = document.documentElement.querySelector('title')

function timer() {
  title.innerText = h1.innerText;
  sec.innerText = second < 10 ? `0${second}` : second;
  min.innerText = minute < 10 ? `0${minute}` : minute;
  hr.innerText = hour < 10 ? `0${hour}` : hour;

}

setInterval(() => {
  timer()

  second++



  if (second == 60) {
    second = 0;
    minute++
    console.log(`${hour}h:${minute}m:${second}`)
  } else if (minute >= 60) {
    hour++;
    minute = 0;
  }
}, ms)