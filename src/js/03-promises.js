import Notiflix from 'notiflix';

const form = document.querySelector(".form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { amount, step, delay } = evt.currentTarget.elements;
   
  if (delay.value < 0 || step.value < 0) {
    return Notiflix.Notify.failure("Insert a positive value");
  }

  if (amount.value <= 0) {
    return Notiflix.Notify.failure("Insert an amount greater than 0!");
  }

  const [...arr] = evt.currentTarget.elements;

  const values = {}; 
  arr.filter((elem) => elem.tagName == "INPUT").forEach((item) => { 
     values[item.name] = Number(item.value); 
  }); 

  updateValues(values); 
 
  evt.currentTarget.reset(); 
}; 
 
function updateValues({ amount, delay, step }) { 
  for (let i = 1; i <= amount; i += 1) { 
    let newDelay = delay + step * (i - 1); 
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
