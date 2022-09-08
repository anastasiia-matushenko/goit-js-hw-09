function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

let timeId = 0;

btnStart.addEventListener("click", onBtnStartClick);
btnStop.addEventListener("click", onbtnStopClick);

function onBtnStartClick() {
    btnStart.setAttribute("disabled", "true"); 
    btnStop.removeAttribute("disabled");

        timeId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000)
};

function onbtnStopClick() {
    clearInterval(timeId);
    btnStart.removeAttribute("disabled");
    btnStop.setAttribute("disabled", "true");
};