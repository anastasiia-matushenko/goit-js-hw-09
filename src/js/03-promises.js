import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const submitBtn = document.querySelector("button[type=submit]");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  submitBtn.disabled = true;

  console.log(evt.currentTarget.elements);
  const { amount, delay, step } = evt.currentTarget.elements;

  const fieldVal = {
    delayVal: +delay.value,
    stepVal: +step.value,
    amountVal: +amount.value,
  }
  updateValues(fieldVal);

  evt.currentTarget.reset();
};

function updateValues({ delayVal, stepVal, amountVal }) {
  // let newDelay;
  for (let position = 1; position <= amountVal; position += 1) {
    let newDelay = delayVal + stepVal * position;

    createPromise(position, newDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      submitBtn.disabled = false;

    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  })
};
