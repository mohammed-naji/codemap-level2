const pcount = document.querySelector(".pcount");
const ccount = document.querySelector(".ccount");
const pavg = document.querySelector(".pavg");
const ravg = document.querySelector(".ravg");
const countCards = document.querySelector(".count-cards");
const loading = document.querySelector(".loading");
let products = [];

window.onload = loadDate;

function loadDate() {
  fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((res) => {
      // get the products
      products = res.products;
      loadDashboard();
      loadCharts();
      countCards.classList.remove("hidden");
      loading.classList.add("hidden");
    })
    .catch((err) => console.log(err));
}

function loadDashboard() {
  pcount.innerHTML = products.length;

  // Load Categories
  // let categories = [...new Set(products.map((product) => product.category))];
  let categories = [...new Set(products.map((product) => product.category))];
  ccount.innerHTML = categories.length;

  // Price AVG
  pavg.innerHTML = (
    products.reduce((acc, current) => (acc += current.price), 0) /
    products.length
  ).toFixed(2);

  // Rate AVG
  ravg.innerHTML = (
    products.reduce((acc, current) => (acc += current.rating), 0) /
    products.length
  ).toFixed(2);
}

// products.map(function (product) {
//   return product.category;
// });

// products.map((product) => {
//   return product.category;
// });

// products.map((product) => product.category);

function loadCharts() {
  // Count products per category
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  // console.log(categoryCounts);

  // Extract labels and data
  const labels = Object.keys(categoryCounts);
  const data = Object.values(categoryCounts);

  const ctx = document.getElementById("categoryChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Products per Category",
          data: data,
          backgroundColor: [
            "#4e79a7",
            "#f28e2b",
            "#e15759",
            "#76b7b2",
            "#59a14f",
            "#edc949",
            "#af7aa1",
            "#ff9da7",
            "#9c755f",
            "#bab0ab",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Product Count by Category",
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  });

  // const ctx = document.getElementById("myChart");
  // new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderWidth: 1,
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
  // var options = {
  //   chart: { type: "bar" },
  //   series: [{ name: "Revenue", data: [44, 55, 57, 56, 61, 58] }],
  //   xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  // };
  // var chart = new window.ApexCharts(document.querySelector("#chart"), options);
  // chart.render();

  // Rated Products

  // Top 10 highest-rated products
  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  const products_labels = topRated.map((product) => product.title);
  const ratings = topRated.map((product) => product.rating);

  const ctx2 = document.getElementById("topRatedChart");

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Rating",
          data: ratings,
          backgroundColor: "#36A2EB",
          borderColor: "#1E88E5",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y", // Horizontal bars
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Top 10 Highest Rated Products",
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 5, // Ratings are out of 5
        },
      },
    },
  });
}
