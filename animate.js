$(function () {
    var elemens = [{
        id: '',
        top: 0,
        bottom: 0
    }];
    var element;
    $("div.section_content").each(function (index, element) {
        elemens[index] = {
            id: $(this).parent().attr('id'),
            top: parseInt($(this).offset().top),
            bottom: parseInt($(this).offset().top) + parseInt($(this).innerHeight())
        }
    })
    $(document).on("scroll", function () {
        var top = parseInt($(window).scrollTop());
        var bottom = top + parseInt($(window).innerHeight())
        for (var i = 0; i < elemens.length; i++) {
            if (bottom > elemens[i].top && top < elemens[i].bottom) {
                element = elemens[i].id;
            }
        }
        $(".section_content").not('#' + element).addClass('animated fadeOutRight');
        $('#' + element).children(".section_content").removeClass('animated fadeOutRight');
        $('#' + element).children(".section_content").addClass('animated fadeInRight');
    })
})
