let this_postion;

$(window).on('scroll', () => {
    this_postion = $('.header').height();

    if(this_postion < $(window).scrollTop()){
        $('nav').addClass('fixed');
    }
    else{
        $('nav').removeClass('fixed');
    }
});