const input = document.querySelector(".search-input");

input.onkeyup = (e) => {
  if (e.keyCode === 13) {
    document.querySelector(".fa-spinner").classList.remove("!hidden");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=f8f80b0e0f5a492d43c822da6c23328b`,
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.main.temp)
        // console.log(res.main.temp)
        document.querySelector(".temp").textContent = res.main.temp;
        document.querySelector(".icon").src =
          `https://openweathermap.org/payload/api/media/file/${res.weather[0].icon}.png`;
        document.querySelector(".fa-spinner").classList.add("!hidden");
      })
      .catch((err) => console.log(err));
  }
};
