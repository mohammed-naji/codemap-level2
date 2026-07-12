const form = document.querySelector(".form-data");
const name = document.querySelector(".input-name");
const email = document.querySelector(".input-email");
const age = document.querySelector(".input-age");
const tbody = document.querySelector("table tbody");
let users = [];
let count = 1;

form.onsubmit = (e) => {
  e.preventDefault();
  let item = {
    name: name.value,
    email: email.value,
    age: age.value,
  };
  users.push(item);
  form.reset();

  addUserToTable(item);
  // generateData();
};

function addUserToTable(user) {
  tbody.innerHTML += `<tr class=" border-b border-default">
             <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
               ${count++}
             </th>
             <td class="px-6 py-4">
               ${user.name}
             </td>
             <td class="px-6 py-4">
               ${user.email}
             </td>
             <td class="px-6 py-4">
               ${user.age}
             </td>
           </tr>`;
}

// function generateData() {
//   let count = 1;
//   tbody.innerHTML = "";
//   users.forEach((user) => {
//     let item = `<tr class=" border-b border-default">
//             <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
//               ${count++}
//             </th>
//             <td class="px-6 py-4">
//               ${user.name}
//             </td>
//             <td class="px-6 py-4">
//               ${user.email}
//             </td>
//             <td class="px-6 py-4">
//               ${user.age}
//             </td>
//           </tr>`;

//     tbody.innerHTML += item;
//   });
// }

const menu = document.querySelector(".menu");

window.oncontextmenu = (e) => {
  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.classList.remove("hidden");

  return false;
};

window.onclick = () => {
  menu.classList.add("hidden");
};

// let user = {
//   name: "Mohammed",
//   email: "moh@gmail.com",
//   age: 32,
// };
// console.log(user.name);

// if (cod) {
// } else {
// }

// (cond) ? true : false

// (cond) ? true : (another) ? true : false
