const sliderBloopers = document.querySelector("#sliderDescansando");
let sliderSection4 = document.querySelectorAll(".ctn__descansando");
let sliderSectionLast4 = sliderSection4[sliderSection4.length - 1];

const btnLeft4 = document.querySelector("#btn__anterior4");
const btnRight4 = document.querySelector("#btn__siguiente4");

sliderBloopers.insertAdjacentElement("afterbegin",sliderSectionLast4);

function Next4() {
  let sliderSectionFirst = document.querySelectorAll(".ctn__descansando")[0];
  sliderBloopers.style.marginLeft = "-200%";
  sliderBloopers.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderBloopers.style.transition = "none";
    sliderBloopers.insertAdjacentElement('beforeend', sliderSectionFirst);
    sliderBloopers.style.marginLeft = "-100%";
  }, 500);
}

function Prev4() {
  let sliderSection = document.querySelectorAll(".ctn__descansando");
  let sliderSectionLast4 = sliderSection[sliderSection.length-1]
  sliderBloopers.style.marginLeft = "0%";
  sliderBloopers.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderBloopers.style.transition = "none";
    sliderBloopers.insertAdjacentElement('afterbegin', sliderSectionLast4);
    sliderBloopers.style.marginLeft = "-100%";
  }, 500);
}

btnLeft4.addEventListener('click',function(){
  Prev4();
});
btnRight4.addEventListener('click',function(){
  Next4();
});