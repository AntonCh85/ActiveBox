$(function() {
//    fixed Header
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  
  $(window).on("scroll load resize", function() {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      if( scrollPos > introH ) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }

    });

// Smooth scroll
  $("[data-scroll]").on("click", function(event){
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");
      
      console.log(elementOffset);

      $("html, body").animate({
          scrollTop: elementOffset -70
      },700);
  });

// nav Toggle


navToggle.on("click", function(event) {
      event.preventDefault(); 

      nav.toggleClass("show");
});

// Reviews https://kenwheeler.github.io/slick/

let slider = $("#reviewsSlider");

slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false
});

    
    
    
    AOS.init({// Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

});


