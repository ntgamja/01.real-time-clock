const h1 = document.querySelector("h1");
const btn = document.querySelector("#btn");

//초기 타임 가져오기
const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

// two index matcher = tim(num)
function tim(num) {
  return num < 10 ? `0${num}` : num;
}

// hmstimer(tag)
function hmstimer(tag) {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    tag.textContent = `${tim(hour)}:${tim(min)}:${tim(sec)}`;
  }, 1000);
}

hmstimer(h1);

//css조작으로 시계 가동하기

//hour
const hourintwelve = hour < 12 ? hour : hour - 12;
const hourDeg = (hourintwelve / 12 + min / 12 / 60 + sec / 12 / 60 / 60) * 360;
document.documentElement.style.setProperty("--hour", `${hourDeg}deg`);
document.documentElement.style.setProperty("--hour2", `${hourDeg + 360}deg`);

//min
const minDeg = (min / 60 + sec / 60 / 60) * 360;
document.documentElement.style.setProperty("--min", `${minDeg}deg`);
document.documentElement.style.setProperty("--min2", `${minDeg + 360}deg`);

//sec
const secDeg = (sec / 60) * 360;
document.documentElement.style.setProperty("--sec", `${secDeg}deg`);
document.documentElement.style.setProperty("--sec2", `${secDeg + 360}deg`);

//dark mode
function darkmode() {
  document.documentElement.style.setProperty("--bgc", `rgb(20, 20, 20)`);
  document.documentElement.style.setProperty(
    "--circlebgc",
    `rgb(150, 150, 150)`
  );
  document.documentElement.style.setProperty(
    "--shadowdark",
    `rgba(0, 0, 0,0.28)`
  );
  document.documentElement.style.setProperty(
    "--shadowbright",
    `rgba(0, 0, 0, 0.28)`
  );
  document.documentElement.style.setProperty(
    "--circleborder",
    `rgb(90, 90, 90)`
  );
  document.documentElement.style.setProperty(
    "--hourniddle",
    `rgb(200, 200, 200)`
  );
  document.documentElement.style.setProperty(
    "--minniddle",
    `rgb(100, 100, 100)`
  );
  document.documentElement.style.setProperty("--secniddle", `tomato`);
  document.documentElement.style.setProperty("--btnbgc", `white`);
  document.documentElement.style.setProperty("--btncolor", `black`);
  document.documentElement.style.setProperty("--hoverbgc", `rgb(90, 90, 90)`);
  document.documentElement.style.setProperty("--hovercolor", `white`);
  document.documentElement.style.setProperty("--h1color", `white`);
}

//white mode
function whitemode() {
  document.documentElement.style.setProperty("--bgc", `#fefefe`);
  document.documentElement.style.setProperty("--circlebgc", `#fefefe`);
  document.documentElement.style.setProperty(
    "--shadowdark",
    `rgba(0, 0, 0, 0.28)`
  );
  document.documentElement.style.setProperty(
    "--shadowbright",
    `rgba(255, 255, 255, 0.68)`
  );
  document.documentElement.style.setProperty(
    "--circleborder",
    `rgb(175, 175, 175)`
  );
  document.documentElement.style.setProperty("--hourniddle", `rgb(67, 67, 67)`);
  document.documentElement.style.setProperty(
    "--minniddle",
    `rgb(184, 183, 183)`
  );
  document.documentElement.style.setProperty("--secniddle", `tomato`);
  document.documentElement.style.setProperty("--btnbgc", `black`);
  document.documentElement.style.setProperty("--btncolor", `white`);
  document.documentElement.style.setProperty(
    "--hoverbgc",
    `rgb(184, 183, 183)`
  );
  document.documentElement.style.setProperty("--hovercolor", `black`);
  document.documentElement.style.setProperty("--h1color", `black`);
}

let btnchecker = 0;
btn.addEventListener("click", (e) => {
  if (btnchecker === 0) {
    darkmode();
    btnchecker = 1;
    btn.textContent = "White Mode";
  } else {
    whitemode();
    btnchecker = 0;
    btn.textContent = "Dark Mode";
  }
});
