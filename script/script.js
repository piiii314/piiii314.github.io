$('.port_slider').slick({
  dots: true, // 하단 paging버튼 노출 여부
  infinite: true, // 양방향 무한 모션
  speed: 150,
  fade: true, 
  cssEase: 'linear', //css easing 모션 함수
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  arrows: true,
  draggable : false,
});

var div2 = document.getElementsByClassName("div2");
function handleClick(event) {
  if (event. target.classList[1] === "clicked") {
      event.target.classList.remove("clicked");
  } else {
      for (var i = 0; i < div2.length; i++) {
          div2[i].classList.remove("clicked");
      }
      event. target.classList.add("clicked");
      }   
  }
  function init() { for (var i = 0; i <div2.length; i++) {
      div2[i].addEventListener("click", handleClick);
      }
  }
init();

AOS.init();

$('.profile a').click(function(e){
  $.scrollTo(this.hash || 0, 500/* 속도 */);
  e.preventDefault(); 
});