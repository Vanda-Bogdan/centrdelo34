$(function(){
    $('.rev_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        speed: 1350,
        draggable: false,
        appendArrows: $('.wrapper'),
        prevArrow: "<img class='w-10 h-10 float-left' src='../img/left-arrow.png'>",
        nextArrow: "<img class='w-10 h-10 float-right' src='../img/right-arrow.png'>"
    })

    $('.experts_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 450,
        draggable: true,
        arrows: false,
        dots: true
    })

})



