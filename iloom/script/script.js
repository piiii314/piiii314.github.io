$('.main_slider').bxSlider({
  auto:true,
  mode: 'fade',
  controls: false,
  pager: false,
  autoDelay:500,
});

$('.product_slider').bxSlider({
  auto:true, 
  pager: false, 
  controls: true, 
  autoControls: false,
  prevText:"",
  nextText:"",
  minSlides: 4, 
  maxSlides: 4, 
  moveSlides: 1, 
  slideWidth: 260, 
  slideMargin: 26, 
  autoHover:true, 
  autoDelay:500,
});

$('.sns_slider').bxSlider({
  auto:true, 
  autoDelay:500,
  pager: false, 
  controls: false, 
  autoControls: false, 
  minSlides: 4, 
  maxSlides: 4, 
  moveSlides: 1, 
  slideWidth: 373, 
  autoHover:true, 
});