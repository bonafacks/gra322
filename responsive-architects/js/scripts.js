$('.menu-button') .click(function(){
    $('nav').toggleClass('open');
});

//Intialize Animate and scroll
AOS.init();

//intialize Jarallax
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
    type: 'scale'
  });


  // Also can pass in optional settings block
 var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
//intialize tinyslider
  var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
