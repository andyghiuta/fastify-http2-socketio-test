$(document).ready(function () {
    var wheight = $(window).height();

    $(window).scroll(function () {
        $('header').toggleClass('scrolled', $(this).scrollTop() > 10);
        if ($(window).scrollTop() > wheight) {
            $('.scrolltop-btn').fadeIn();
        } else {
            $('.scrolltop-btn').fadeOut();
        }
    });
    $(document).on("click", ".scrolltop-btn", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "500");
    });
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
    if ($(window).width() < 992) {
        $('.menu-icon').click(function () {
            $('.header-nav').css({
                'right': '0px',
                'opacity': '1',
                'visibility': 'visible'
            });
            $('#cls-btn').css('display', 'block');
        });
        $('#cls-btn').click(function () {
            $('.header-nav').css({
                'right': '-250px',
                'opacity': '0',
                'visibility': 'hidden'
            });
            $(this).css('display', 'none');
        });
        $(document).on('click', function (e) {
            if ($(e.target).closest(".header-nav, .menu-icon").length === 0) {
                $('.header-nav').css({
                    'right': '-250px',
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                $('#cls-btn').css('display', 'none');
            }
        });

    } else {
        $('#cls-btn').css({
            'display': 'block',
            'opacity': '0',
            'visibility': 'hidden'
        });
    }



    $('div.service-list h3').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('div.service-list h3').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })

        <

        $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });

});