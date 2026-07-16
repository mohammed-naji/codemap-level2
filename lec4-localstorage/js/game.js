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
  "text-sm",
  "text-md",
  "text-lg",
  "text-2xl",
  "text-3xl",
  "text-4xl",
];

window.onclick = (e) => {
  let sticker = stickers[Math.floor(Math.random() * stickers.length)];
  let size = sizes[Math.floor(Math.random() * sizes.length)];

  let el = `<span class="absolute ${size}" style="top: ${e.clientY}px;left:${e.clientX}px">${sticker}</span>`;

  if (!e.target.classList.contains("fall-btn")) {
    document.querySelector(".wrapper").innerHTML += el;
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
