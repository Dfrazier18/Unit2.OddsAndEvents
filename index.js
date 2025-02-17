// === State ===
let numbersBank = [];
let odds = [];
let evens = [];

function moveToBank(num) {
  if (num < 0) return; // Guard

  numbersBank.push(num); // Push the number to bank
  render();
}

function sortOne() {
  if (numbersBank.length === 0) return; // Guard

  const num = numbersBank.shift(); // Store first number bank
  num % 2 === 0 ? evens.push(num) : odds.push(num); // If number is even send to even, if odd send to odd
}

function sortAll() {
  numbersBank.forEach((num) => sortOne()); // For each number in bank, sort
}

// === Components ===
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
        <label>
          Add a number to the bank
          <input name="bank" type="number" min="1" />
        </label>
        <button id="addNumber">Add number</button>
      <button id="sortOne">Sort 1</button>
      <button id="sortAll">Sort All</button>
      `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const count = data.get("bank");
    addBank(Number(count));
  });
  return $form;
}
// === Render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <main>

    </main>
    `;
}

render();
