var elementTop = $('.nav').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});
$('.btn-menu').on('click', function(){
    $('.nav').toggleClass('nav-toggle');
})

$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }
    })
});