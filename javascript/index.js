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
                    document.querySelector('#mashedPotatoesImg').hidden = false;
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
  .catch(err => console.log(err))
  .finally(() => {
    document.querySelector('#steak').innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector('#steakImg').hidden = false;
  });

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    let step = await obtainInstruction('broccoli', 0);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 1);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 2);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 3);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 4);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 5);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction('broccoli', 6);
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector('#broccoliImg').hidden = false;
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const brussels0 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[0])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[0]);
});
const brussels1 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[1])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[1]);
});
const brussels2 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[2])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[2]);
});
const brussels3 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[3])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[3]);
});
const brussels4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!brusselsSprouts[4])
      reject(console.log('Instruction step does not exist!'));
    else resolve(brusselsSprouts[4]);
  }, 3000);
});
const brussels5 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[5])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[5]);
});
const brussels6 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[6])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[6]);
});
const brussels7 = new Promise((resolve, reject) => {
  if (!brusselsSprouts[7])
    reject(console.log('Instruction step does not exist!'));
  else resolve(brusselsSprouts[7]);
});

Promise.all([
  brussels0,
  brussels1,
  brussels2,
  brussels3,
  brussels4,
  brussels5,
  brussels6,
  brussels7,
])
  .then(allValues => {
    return allValues.map(value => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${value}</li>`;
    });
  })
  .catch(err => console.log(err))
  .finally(() => {
    document.querySelector(
      '#brusselsSprouts'
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector('#brusselsSproutsImg').hidden = false;
  });
