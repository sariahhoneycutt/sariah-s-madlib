// 1. Use the id-selector to get your inputs' and the output element from the DOM
//for each input, I'll need to repeat the following//
const inputOne = document.querySelector(`#one`); // this creates a var of the element
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);

const output = document.querySelector(`.output`); // this is the div for the output
// 2. For each of the inputs, get the value (word) from them


// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} is the main character of this story.
  ${inputOne.value} was a very ${inputTwo.value} and ${inputThree.value} person who loved to ${inputFour.value}.
  One time while ${inputOne.value} was just about to ${inputFour.value}, their mother stopped them to meet someone.
  Their mom said, "Meet ${inputFive.value}, who is going to be your new ${inputSix.value}!" ${inputOne.value} was so ${inputSeven.value} about this new change.
  ${inputOne.value} and ${inputFive.value} had such a ${inputEight.value} time ${inputNine.value} together.
  They spent every hour of everyday ${inputTen.value} school ${inputNine.value}.`
 // instead of logging, we need to add HTML to the output object
  output.innerHTML = madlib;
}

  console.log(generateTemplate);
