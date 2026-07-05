const add = document.querySelector(".add");
const print_btn = document.querySelector(".print");
const tbody = document.querySelector("table tbody");
let counter = 1;

print_btn.onclick = () => window.print();

add.onclick = () => {
  let item = `<tr>
          <td class="p-2">${++counter}</td>
          <td class="p-2"><input type="text" class="border w-full p-2" placeholder="Name"></td>
          <td class="p-2"><input type="text" class="border w-full p-2" placeholder="Quantity"></td>
          <td class="p-2"><input type="text" class="border w-full p-2" placeholder="Price"></td>
          <td class="p-2 print:hidden"><button class="text-red-700 cursor-pointer delete">Delete</button></td>
        </tr>`;

  // tbody.innerHTML += item;
  tbody.insertAdjacentHTML("beforeend", item);
};

tbody.onclick = (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
    sortItems();
  }
};

function sortItems() {
  counter = 1;
  document.querySelectorAll("tbody tr").forEach((tr) => {
    tr.querySelector("td:first-child").innerHTML = counter++;
  });
}
