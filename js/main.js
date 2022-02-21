// OwlCarousel
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
});


// slick slider
$('.slick_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:'<i class="left_arrow">',
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow">,'
  });

// iso-top
// init Isotope
// var $grid = $('.course-item').isotope({
//     // options
//   });
//   // filter items on button click
//   $('.course-category').on( 'click', 'li', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });