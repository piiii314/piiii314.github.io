$('.publishing .slider').slick({
  dots: true, // 하단 paging버튼 노출 여부
  infinite: true, // 양방향 무한 모션
  speed: 150,
  fade: true, 
  cssEase: 'linear', //css easing 모션 함수
  prevArrow: $('.publishing_prev'),
  nextArrow: $('.publishing_next'),
  arrows: true,
  draggable : false,
});

$('.design .slider').slick({
  dots: false, // 하단 paging버튼 노출 여부
  infinite: true, // 양방향 무한 모션
  speed: 150,
  cssEase: 'linear', //css easing 모션 함수
  prevArrow: $('.design_prev'),
  nextArrow: $('.design_next'),
  arrows: true,
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});

AOS.init();

$('nav a').click(function(e){
  $.scrollTo(this.hash || 0, 500/* 속도 */);
  e.preventDefault(); 
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 

$(function(){ var lastScroll = 0; $(window).scroll(function(event){
  var scroll = $(this).scrollTop();
  if (scroll < 1000){
    $("nav .about").addClass("clicked");}
  else {
    $("nav .about").removeClass("clicked");} 
  if (scroll > 1000 && scroll < 2200){
    $("nav .portfolio").addClass("clicked");}
  else {
    $("nav .portfolio").removeClass("clicked");} 
    if (scroll > 2200){
      $("nav .contactMe").addClass("clicked");}
    else {
      $("nav .contactMe").removeClass("clicked");} 
      lastScroll = scroll;});
    });


const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = '전송 중...';

  const serviceID = 'gmail';
  const templateID = 'template_gdlsbns';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '전송 완료';
      alert('전송 완료!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
