let theme = localStorage.getItem("theme") || "light";

document.documentElement.classList.add(theme);

const theme_btn = document.querySelector(".theme");
theme_btn.onclick = () => {
  document.documentElement.classList.toggle("dark");
  let theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("theme", theme);
};

// let user = {
//   name: "Mohammed Naji",
//   email: "moh@gmail.com",
// };

// localStorage.setItem("user", JSON.stringify(user));

// let user = JSON.parse(localStorage.getItem("user"));
// console.log(user.name);

// let cart = [
//   {
//     id: 10,
//     name: "Merci",
//     price: 100,
//   },
//   {
//     id: 20,
//     name: "CocaCola",
//     price: 40,
//   },
// ];

// localStorage.setItem("cart", JSON.stringify(cart));

let cart = JSON.parse(localStorage.getItem("cart"));

console.log(cart);

let products = [
  {
    id: 10,
    name: "Macbook",
    image: "aa.png",
    price: 2000,
  },
  {
    id: 10,
    name: "Macbook",
    price: 2000,
  },
  {
    id: 10,
    name: "Macbook",
    price: 2000,
  },
];
