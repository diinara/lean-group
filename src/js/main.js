$(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1, 
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    var certSlider = $("#certificates-slider"); 
    certSlider.owlCarousel({
        loop: true,
        responsive: {
            0 : {
                items: 1,
            },
            536 : {
                items: 3,
                margin: 10,
            },
            768 : {
                items: 4,
                margin: 15,
            },
            1200 : {
                items: 5,
                margin: 30,
            },
        }
    });
    $('.custom-next_cert').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    $('.custom-prev_cert').click(function() {
        certSlider.trigger('prev.owl.carousel', [300]);
    })
    //Табы на странице
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function () {
        $(this)
            .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
            .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
    });
    
    var productsSlider = $('.products-slider')
    productsSlider.owlCarousel({
        loop: true,
        dots:false,
        responsive: {
            0 : {
                items: 1,
            },
            536 : {
                items: 3,
                margin: 10,
            },
            768 : {
                items: 4,
                margin: 15,
            },
            1200 : {
                items: 5,
                margin: 30,
            },
        }
    });
    $('.custom-next_prod').click(function() {
        productsSlider.trigger('next.owl.carousel');
    })
    $('.custom-prev_prod').click(function() {
        productsSlider.trigger('prev.owl.carousel', [300]);
    })
});