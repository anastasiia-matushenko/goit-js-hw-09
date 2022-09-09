import Notiflix from 'notiflix';

const form = document.querySelector(".form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { amount, delay, step } = evt.currentTarget.elements;

  const fieldsVal = {
    delayVal: Number(delay.value),
    stepVal: Number(step.value),
    amountVal: Number(amount.value),
  }
  updateValues(fieldsVal);

  evt.currentTarget.reset();
};

function updateValues({ delayVal, stepVal, amountVal }) {
  for (let i = 1; i <= amountVal; i += 1) {
    let newDelay = delayVal + stepVal * (i - 1);
    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  })
};
