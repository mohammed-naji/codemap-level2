const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
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
        let item = `<div onclick="showDetails(${el.id})" class="bg-gray-200 p-4 rounded shadow-lg text-center product">
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

function showDetails(id) {
  // console.log(id);
  // 1. get the actual id

  // 2. get full details
  axios
    .get("https://dummyjson.com/products/" + id)
    .then((res) => {
      modal.querySelector("h2").innerHTML = res.data.title;
      modal.querySelector("strong").innerHTML = `$${res.data.price}`;
      modal.querySelector("p").innerHTML = res.data.description;
      modal.querySelector(".main-img").src = res.data.thumbnail;
      modal.querySelector(".gallery").innerHTML = "";
      res.data.images.forEach((src, i) => {
        // if (i == 2) return;

        modal.querySelector(".gallery").innerHTML +=
          `<img onclick="showImage(this)" class="w-16 h-16 object-cover border border-gray-200 rounded ${i == 0 ? "border-teal-600" : ""}" src="${src}" alt="">`;
      });
      document.body.classList.add("overflow-hidden");
      modal.classList.remove("opacity-0", "invisible");
    })
    .catch((err) => {
      console.log(err);
    });
  // 3. add details in modal

  // 4. show modal
}

modal.onclick = () => {
  modal.classList.add("opacity-0", "invisible");
  document.body.classList.remove("overflow-hidden");
};

modal.querySelector(".content").onclick = (e) => e.stopPropagation();

// products_wrapper.onclick = (e) => {
//   console.log(e.target.closest(".product").dataset.id);
// };

function showImage(img) {
  modal
    .querySelector(".gallery .border-teal-600")
    .classList.replace("border-teal-600", "border-gray-200");
  img.classList.add("border-teal-600");
  modal.querySelector(".main-img").src = img.src;
}
