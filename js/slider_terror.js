const sliderCategoria3 = document.querySelector("#sliderTerror");
let sliderSection3 = document.querySelectorAll(".ctn__terror");
let sliderSectionLast3 = sliderSection3[sliderSection3.length - 1];

const btnLeft3 = document.querySelector("#btn__anterior3");
const btnRight3 = document.querySelector("#btn__siguiente3");

sliderCategoria3.insertAdjacentElement("afterbegin",sliderSectionLast3);

function Next3() {
  let sliderSectionFirst = document.querySelectorAll(".ctn__terror")[0];
  sliderCategoria3.style.marginLeft = "-200%";
  sliderCategoria3.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria3.style.transition = "none";
    sliderCategoria3.insertAdjacentElement('beforeend', sliderSectionFirst);
    sliderCategoria3.style.marginLeft = "-100%";
  }, 500);
}

function Prev3() {
  let sliderSection = document.querySelectorAll(".ctn__terror");
  let sliderSectionLast3 = sliderSection[sliderSection.length-1]
  sliderCategoria3.style.marginLeft = "0%";
  sliderCategoria3.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria3.style.transition = "none";
    sliderCategoria3.insertAdjacentElement('afterbegin', sliderSectionLast3);
    sliderCategoria3.style.marginLeft = "-100%";
  }, 500);
}

btnLeft3.addEventListener('click',function(){
  Prev3();
});
btnRight3.addEventListener('click',function(){
  Next3();
});