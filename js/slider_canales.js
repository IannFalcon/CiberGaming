const sliderCategoria1 = document.querySelector("#sliderRecomendaciones");
let sliderSection1 = document.querySelectorAll(".ctn__recomendaciones");
let sliderSectionLast1 = sliderSection1[sliderSection1.length - 1];

const btnLeft1 = document.querySelector("#btn__anterior");
const btnRight1 = document.querySelector("#btn__siguiente");

sliderCategoria1.insertAdjacentElement("afterbegin",sliderSectionLast1);

function Next1() {
  let sliderSectionFirst = document.querySelectorAll(".ctn__recomendaciones")[0];
  sliderCategoria1.style.marginLeft = "-200%";
  sliderCategoria1.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria1.style.transition = "none";
    sliderCategoria1.insertAdjacentElement('beforeend', sliderSectionFirst);
    sliderCategoria1.style.marginLeft = "-100%";
  }, 500);
}

function Prev1() {
  let sliderSection = document.querySelectorAll(".ctn__recomendaciones");
  let sliderSectionLast1 = sliderSection[sliderSection.length-1]
  sliderCategoria1.style.marginLeft = "0%";
  sliderCategoria1.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria1.style.transition = "none";
    sliderCategoria1.insertAdjacentElement('afterbegin', sliderSectionLast1);
    sliderCategoria1.style.marginLeft = "-100%";
  }, 500);
}

btnLeft1.addEventListener('click',function(){
  Prev1();
});
btnRight1.addEventListener('click',function(){
  Next1();
});