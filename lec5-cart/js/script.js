const btn = document.querySelector(".btn");
const products_wrapper = document.querySelector(".products");

window.onload = () => {
  // Ajax Request
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(JSON.parse(this.responseText));
  //   }
  // };
  // xhttp.open("GET", "https://dummyjson.com/products", true);
  // xhttp.send();
  // Jquery Ajax
  // $.ajax({
  //   method: "GET",
  //   url: "https://dummyjson.com/products",
  //   success: (res) => {
  //     console.log(res);
  //   },
  //   error: (err) => {
  //     console.log(err);
  //   },
  // });
  // Ajax Axios
  axios
    .get("https://dummyjson.com/products?limit=12")
    .then((res) => {
      res.data.products.forEach((el) => {
        let item = `<div data-id="${el.id}" class="bg-gray-200 p-4 rounded shadow-lg text-center product">
        <img src="${el.thumbnail}">
        <h2 class="truncate text-xl my-4">${el.title}</h2>
        <p class="capitalize">${el.category}</p>
        <strong>$${el.price}</strong>
      </div>`;
        products_wrapper.innerHTML += item;
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // Fetch API
  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
};

products_wrapper.onclick = (e) => {
  console.log(e.target.closest(".product").dataset.id);
};
