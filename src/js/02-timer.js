import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStart = document.querySelector("button[data-start]");

const dataTimes = ["data-days", "data-hours", "data-minutes", "data-seconds"];

btnStart.setAttribute("disabled", "true");

class Timer {
  constructor({ onTime }) {
    this.intervalId = null;
    this.isActive = null;
    this.dateFuture = null;
    this.onTime = onTime;
  }

  setDate(date) {
    this.dateFuture = date;
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const dateFuture = new Date(this.dateFuture);

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const deltaTime = dateFuture - currentTime; 

      if (deltaTime <= 0) {
        this.stop();
        return;
      }

      const time = this.convertMs(deltaTime);

      this.onTime(Object.values(time));
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }
};

const timer = new Timer({
  onTime: updateClickFace,
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNew = new Date();

    if (dateNew < selectedDates[0]) {
      btnStart.removeAttribute("disabled");
      timer.setDate(selectedDates[0]);
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr("#datetime-picker", options);

function updateClickFace(arr) {
  for (let i = 0; i < dataTimes.length; i += 1) {
    const elements = document.querySelector(`.value[${dataTimes[i]}]`)
    elements.textContent = arr[i];
  }
};

btnStart.addEventListener("click", () => {
  btnStart.setAttribute("disabled", "true");
  timer.start();
});
