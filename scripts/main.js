$(function() {
    var topRow = $('.top_row');
    var botRow = $('.bottom_row');

    $('.arrow_right').on('click', function() {
        // console.log('right:');
        // console.log($('.top_slide').last().width());
        topRow.animate({left: $('.top_slide').last().width()}, 500, function() {
            topRow.css('left', '0px');
            $('.top_slide').first().before($('.top_slide').last());
        });
        // console.log($('.bot_slide').last().width());
        botRow.animate({left: $('.bot_slide').last().width()}, 500, function() {
            botRow.css('left', '0px');
            $('.bot_slide').first().before($('.bot_slide').last());
        });
    });

    $('.arrow_left').on('click', function() {
        // console.log('left:');
        // console.log($('.top_slide').first().width());
        topRow.animate({right: $('.top_slide').first().width()}, 500, function() {
            topRow.css('right', '0px');
            $('.top_slide').last().after($('.top_slide').first());
        });
        // console.log($('.bot_slide').first().width());
        botRow.animate({right: $('.bot_slide').first().width()}, 500, function() {
            botRow.css('right', '0px');
            $('.bot_slide').last().after($('.bot_slide').first());
        });
    });

})