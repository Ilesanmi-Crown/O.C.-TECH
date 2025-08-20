const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split('').map(
  (char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');


const images = [
  "url(hero_bg.jpg)",
  "url(hero2.jpg)",
  "url(hero3.jpg)"
];

let i = 0;
const hero = document.getElementById("hero");
const interval = setInterval(changeBackground, 5000);
const dots = document.querySelectorAll("#slider-nav .dot");




function changeBackground(index = i) {


  hero.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), ${images[i]}`;

  
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  
  
  const root = document.documentElement;
  if(i ==  0){
    root.style.setProperty('--green', 'rgba(124, 212, 0, 1)')
    root.style.setProperty('--white', 'black')
  }else{
    root.style.setProperty('--green', 'rgba(202, 41, 37, 1)')
    root.style.setProperty('--white', 'white')
  }

    i = (index + 1) % images.length;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    i = index;          // set current index
    changeBackground(i); // show correct slide immediately
  });
});

changeBackground(0);
