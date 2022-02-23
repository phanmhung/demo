jQuery(function($) {
    $(".slide-case").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
    });

});