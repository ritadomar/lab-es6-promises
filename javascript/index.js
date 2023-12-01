// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction(
  'mashedPotatoes',
  0,
  step0 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;
    getInstruction(
      'mashedPotatoes',
      1,
      step1 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          'mashedPotatoes',
          2,
          step2 => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              'mashedPotatoes',
              3,
              step3 => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  'mashedPotatoes',
                  4,
                  step4 => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step4}</li><li>Mashed potatoes are ready!</li>`;
                  },
                  err => console.log(err)
                );
              },
              err => console.log(err)
            );
          },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  },
  err => console.log(err)
);

// Iteration 2 - using promises
// ...
debugger;
obtainInstruction('steak', 0)
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 1)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 2)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 3)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 4)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 5)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 6)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 7)
  )
  .then(
    value =>
      (document.querySelector('#steak').innerHTML += `<li>${value}</li>`) &&
      obtainInstruction('steak', 9)
  )
  .catch(err => console.log(err));

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
