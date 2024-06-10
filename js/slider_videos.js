window.addEventListener('load',function() {
  new Glider(document.querySelector(".lista__videos"),{
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    dots: '.indicadores',
    arrows: {
      prev: '.btn__anterior',
      next: '.btn__siguiente'
    }
  });
})