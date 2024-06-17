
$(document).ready(function(){
 

    
// first line needed to activate the slick script
$(".slider-container").slick({
    //all settings copied from slick website
    autoplay: false, // Do we want it to autoplay? true or false
    autoplaySpeed: 2000, // How long between each slide when auto-playing
    speed: 500, // How fast is the transition in milliseconds
    arrows: true, // Do you want to show arrows to trigger each slide
    accessibility: true, // Enables keyboard tabbing and arrow key navigation
    dots: true, // Enables the dots below to show how many slides
    fade: false, // Changes the animate from slide to fade if true
    infinite: true, // When true, means that it will scroll in a circle
    pauseOnHover: true, // When true means the autoplay pauses when hovering
    pauseOnDotsHover: true
  });

  // $('.responsive').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });

});