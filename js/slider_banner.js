const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__img");
let sliderSectionLast = sliderSection[sliderSection.length-1];

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function sliderBanner() {
  let sliderSectionFirst = document.querySelectorAll(".slider__img")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

setInterval(function() {
  sliderBanner();
}, 4000);