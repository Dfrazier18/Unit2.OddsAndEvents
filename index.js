// === State ===
let numbersBank = [];
let odds = [];
let evens = [];

function addToBank(num) {
  if (typeof num !== "number") return; // Guard

  numbersBank.push(num); // Push number to bank
  render();
}

function moveFromBank() {
  if (numbersBank.length <= 0) return; // Guard
  const n = numbersBank.shift(); // Store first number in bank in variable
  if (n % 2 === 0) {
    // If the first number is even
    evens.push(n); // add it to the evens array
  } else {
    // else
    odds.push(n); // add it to the odds array
  }

  render();
}

// === Components ===
function NumberForm() {
  const $form = document.createElement("form");

  $form.innerHTML = `
        <label>
          Add a number to the bank
          <input name="bank" type="number"/>
        </label>
      <button id="addNumber" type="button">Add number</button>
      <button id="sortOne">Sort 1</button>
      <button id="sortAll">Sort All</button>
      `;

  const $add = $form.querySelector("#addNumber"); // Select the Add button from form
  $add.addEventListener("click", () => {
    // When the add button is clicked
    const data = new FormData($form); // Get input data from the form
    const number = data.get("bank"); // Store that data in a variable
    addToBank(Number(number)); // Turn that data into a number and add it to the bank
  });

  const $sortOne = $form.querySelector("#sortOne"); // Select Sort one button
  $sortOne.addEventListener("click", moveFromBank); // When it's clicked perfom moveFromBank function

  const $sortAll = $form.querySelector("#sortAll"); // Select Sort All button
  $sortAll.addEventListener("click", () => {
    // when it's clicked
    while (numbersBank.length > 0) {
      // While there are numbers in the bank
      moveFromBank(); // Perform the moveFromBank function
    }
  });

  return $form;
}

function Numbers(numbers) {
  const $numbers = document.createElement("p");

  $numbers.classList.add("numbers");

  const $numberSpans = [];
  for (const number of numbers) {
    const $number = document.createElement("span");
    $number.textContent = number;
    $numberSpans.push($number);
  }

  $numbers.replaceChildren(...$numberSpans);

  return $numbers;
}

function NumberList(title, numbers) {
  const $section = document.createElement("section");

  $section.innerHTML = `
  <h2>${title}</h2>
  <Numbers></Numbers>
  `;

  $section.querySelector("Numbers").replaceWith(Numbers(numbers));
  return $section;
}

// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <bank></bank>
    <odds></odds>
    <evens></evens>
    `;

  $app.querySelector("NumberForm").replaceWith(NumberForm());
  $app.querySelector("bank").replaceWith(NumberList("Bank", numbersBank));
  $app.querySelector("odds").replaceWith(NumberList("Odds", odds));
  $app.querySelector("evens").replaceWith(NumberList("Evens", evens));
}

render();
