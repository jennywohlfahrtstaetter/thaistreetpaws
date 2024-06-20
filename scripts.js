$(document).ready(function(){

  $(".hamburger-button").click(function(){

    $(this).toggleClass('active');
    $('.mob-menu').slideToggle();
  });

  $('.slick-carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    accessibility: true,
    fade: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});