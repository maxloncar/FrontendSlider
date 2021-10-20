$(document).ready(() => {
    let topRow = $('.top_row');
    let botRow = $('.bottom_row');

    let slideRight = () => {
        $('.arrow_right').removeClass('active');
        $('.arrow_left').removeClass('active');
        topRow.animate({left: $('.top_slide').last().width() + 10}, 800, () => {
            topRow.css('left', '0px');
            $('.top_slide').first().before($('.top_slide').last());
            $('.arrow_right').addClass('active');
            $('.arrow_left').addClass('active');
        });
        botRow.animate({left: $('.bot_slide').last().width() + 10}, 800, () => {
            botRow.css('left', '0px');
            $('.bot_slide').first().before($('.bot_slide').last());
        });
    }

    let slideLeft = () => {
        $('.arrow_left').removeClass('active');
        $('.arrow_right').removeClass('active');
        let top_item_width = $('.top_slide').first().width() + 10;
        let bot_item_width = $('.bot_slide').first().width() + 10;  

        $('.top_slide').last().after($('.top_slide').first());  
        topRow.css({'left' : (top_item_width) + 'px'}); 
        topRow.animate({'left' : 0}, 800, () => {
            $('.arrow_left').addClass('active');
            $('.arrow_right').addClass('active');
        });

        $('.bot_slide').last().after($('.bot_slide').first());  
        botRow.css({'left' : (bot_item_width) + 'px'}); 
        botRow.animate({'left' : 0}, 800);
};

    $('.arrow_right').on('click', () => {
        if ($('.arrow_right').hasClass('active')) {
            slideRight();
        }
    });

    $('.arrow_left').on('click', () => {
        if ($('.arrow_left').hasClass('active')) {
            slideLeft();
        }
    });

});