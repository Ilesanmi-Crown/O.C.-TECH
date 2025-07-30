// const navigation = document.querySelector(".navigation");

// const navigationheight = navigation.offsetHeight;

// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navigationheight + "px"
// );

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split('').map(
  (char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');