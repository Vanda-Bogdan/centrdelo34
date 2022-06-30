$(function(){
    $('.main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        speed: 1350,
        draggable: false,
        appendArrows: $('.arrows_sec'),
        prevArrow: "<i class='fas fa-angle-left cursor-pointer group-hover:opacity-100 opacity-0 duration-500 float-left text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-100 ml-12 px-[14px] py-2'></i>",
        nextArrow: "<i class='fas fa-angle-right cursor-pointer group-hover:opacity-100 opacity-0 duration-500 float-right text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-100 mr-12 px-[14px] py-2'></i>",
        autoplay: true,
        autoplaySpeed: 10000
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

    $('.achievements_slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      speed: 500,
      draggable:  false,
      dots: false,
      autoplay: false,
      arrows: true,
      appendArrows: $('.ach_arrows'),
      prevArrow: "<i class='fas fa-angle-left border-1 px-[7px] py-1 mr-1 text-gray-400 hover:text-black hover:border-[#f6ba18]'></i>",
      nextArrow: "<i class='fas fa-angle-right border-1 px-[7px] py-1 text-gray-400 hover:text-black hover:border-[#f6ba18]'></i>",
      pauseOnFocus: true
  })


    
})

//about us - tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].className = tabcontent[i].className.replace(" fade", "");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " fade";
    evt.currentTarget.className += " active";
  }


//counter observer
var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}
var callback = function(entries, observer) {
  $('.timer').countTo();
};

var observer = new IntersectionObserver(callback, options);

var target = document.querySelector('.timer');
observer.observe(target);