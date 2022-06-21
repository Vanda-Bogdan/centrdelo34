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
        speed: 200,
        draggable: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        pauseOnFocus: false
    })


    
})

//about us - tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }



