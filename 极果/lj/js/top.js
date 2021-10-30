// 回到顶部
$(function () {
    // 页面滚动按钮出现
    var index = $('.tou').offset().top;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= index) {
            $('#back_top').fadeIn();
        } else {
            $('#back_top').fadeOut();
        }
    })
    $('#back_top').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0
        });
    })
})