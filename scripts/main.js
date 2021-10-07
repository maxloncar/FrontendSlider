'use strict';

$(document).ready(function () {
    var topRow = $('.top_row');
    var botRow = $('.bottom_row');

    var slideRight = function slideRight() {
        $('.arrow_right').removeClass('active');
        topRow.animate({ left: $('.top_slide').last().width() + 10 }, 800, function () {
            topRow.css('left', '0px');
            $('.top_slide').first().before($('.top_slide').last());
            $('.arrow_right').addClass('active');
        });
        botRow.animate({ left: $('.bot_slide').last().width() + 10 }, 800, function () {
            botRow.css('left', '0px');
            $('.bot_slide').first().before($('.bot_slide').last());
        });
    };

    var slideLeft = function slideLeft() {
        $('.arrow_left').removeClass('active');
        var top_item_width = $('.top_slide').first().width() + 10;
        var bot_item_width = $('.bot_slide').first().width() + 10;

        $('.top_slide').last().after($('.top_slide').first());
        topRow.css({ 'left': top_item_width + 'px' });
        topRow.animate({ 'left': 0 }, 800, function () {
            $('.arrow_left').addClass('active');
        });

        $('.bot_slide').last().after($('.bot_slide').first());
        botRow.css({ 'left': bot_item_width + 'px' });
        botRow.animate({ 'left': 0 }, 800);
    };

    $('.arrow_right').on('click', function () {
        if ($('.arrow_right').hasClass('active')) {
            slideRight();
        }
    });

    $('.arrow_left').on('click', function () {
        if ($('.arrow_left').hasClass('active')) {
            slideLeft();
        }
    });
});