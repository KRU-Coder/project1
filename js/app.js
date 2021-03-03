$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $(".to-top").show();
    }
    else{
        $(".to-top").hide();
    }
})