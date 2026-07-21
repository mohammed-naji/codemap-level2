const stickers = [
  "😂",
  "🔥",
  "❤️",
  "🎉",
  "😎",
  "👍",
  "✨",
  "💯",
  "🥳",
  "😍",
  "🤩",
  "🌟",
];

let sizes = [
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
];

window.onclick = (e) => {
  let sticker = stickers[Math.floor(Math.random() * stickers.length)];
  let size = sizes[Math.floor(Math.random() * sizes.length)];

  // let el = `<span class="absolute ${size}" style="top: ${e.clientY}px;left:${e.clientX}px">${sticker}</span>`;

  let span = document.createElement("span");

  span.className = `absolute ${size}`;
  span.style.left = `${e.clientX}px`;
  span.style.top = `${e.clientY}px`;
  span.style.setProperty("--start", `${e.clientY}px`);
  span.textContent = sticker;

  if (!e.target.classList.contains("fall-btn")) {
    // document.querySelector(".wrapper").innerHTML += el;
    document.querySelector(".wrapper").appendChild(span);
  } else {
    document.querySelectorAll("span").forEach((el) => {
      el.classList.add("drop");
    });
  }
};

// const btn = document.querySelector(".fall-btn");

// btn.onclick = (e) => {
//   e.stopPropagation();

//   alert(455);
//   console.log(document.querySelectorAll("span"));

//   document.querySelectorAll("span").forEach((el) => {
//     console.log(el);
//   });
// };
