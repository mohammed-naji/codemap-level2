const add_btn = document.querySelector(".add-mark");
const calc_form = document.querySelector("form");
const result = document.querySelector(".result");

let count = 4;
add_btn.onclick = () => {
  let input = `<input type="number" max="100" class="border border-gray-400 rounded p-2 input-email" placeholder="Mark ${count++}"
        required>`;
  add_btn.parentElement.insertAdjacentHTML("beforebegin", input);
};

calc_form.onsubmit = (e) => {
  e.preventDefault();

  let marks_inputs = document.querySelectorAll("form input[type=number]");

  let sum = 0,
    avg = 0;

  marks_inputs.forEach((m) => {
    sum += Number(m.value);
  });

  avg = sum / marks_inputs.length;
  result.innerHTML = avg.toFixed(2);
};
