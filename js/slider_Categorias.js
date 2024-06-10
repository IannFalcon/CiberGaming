const sliderCategoria = document.querySelector("#sliderCategorias");
let sliderSection2 = document.querySelectorAll(".ctn_cat1");
let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];

const btnLeft = document.querySelector("#btn__anterior2");
const btnRight = document.querySelector("#btn__siguiente2");

sliderCategoria.insertAdjacentElement("afterbegin",sliderSectionLast2);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".ctn_cat1")[0];
  sliderCategoria.style.marginLeft = "-200%";
  sliderCategoria.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria.style.transition = "none";
    sliderCategoria.insertAdjacentElement('beforeend', sliderSectionFirst);
    sliderCategoria.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".ctn_cat1");
  let sliderSectionLast2 = sliderSection[sliderSection.length-1]
  sliderCategoria.style.marginLeft = "0%";
  sliderCategoria.style.transition = "all 0.5s";
  setTimeout(function () {
    sliderCategoria.style.transition = "none";
    sliderCategoria.insertAdjacentElement('afterbegin', sliderSectionLast2);
    sliderCategoria.style.marginLeft = "-100%";
  }, 500);
}

btnLeft.addEventListener('click',function(){
  Prev();
});
btnRight.addEventListener('click',function(){
  Next();
});