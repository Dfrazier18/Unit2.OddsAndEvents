// === State ===
let numbersBank = [];
let odds = [];
let evens = [];

function addBank(n) {
  bank += n;
  render();
}

function moveToBank() {
  if (bank <= 0) return;
}

function sortOne() {}

function sortAll() {}

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
