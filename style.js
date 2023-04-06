$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'fadeOut',

    autoplay:true,
    autoplayTimeout:3000,

    
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})