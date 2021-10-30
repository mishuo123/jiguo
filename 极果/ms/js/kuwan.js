

// 回到顶部
$(function () {


    //tab栏切换
    $(function () {
        $(".box2 ul li").click(function () {
            $(this).addClass('b1').siblings().removeClass('b1');
            var index = $(this).index();
            $('section .b').eq(index).show().siblings().hide();
        });
    })







    // 页面滚动按钮出现
    var index = $('.box2').offset().top;
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




// 点击小心心
// var img_ = document.getElementsByClassName('imgs')[0];
// img_.onclick = function () {
//     img_.style.background = 'url("../image/xinRedo.png")';
// }







// ajax请求+渲染页面

window.addEventListener('load', function () {





    var btn1 = document.getElementsByClassName('but1')[0];
    var btn2 = document.getElementsByClassName('but2')[0];


    fn1();
    fn2();

    function fn1() {

        var a = 1;
        var n = 0;
        var changdu;
        btn1.addEventListener('click', function () {

            this.style.background = "url('../image/loading-icon.gif') no-repeat left center";
            //定时器
            setTimeout(function () {
                btn1.style.background = "url('../image/more.png') no-repeat left center";
                n++;
                if (a == changdu) {
                    btn1.innerText = '没有更多的数据啦！'
                    return a = changdu;
                }
                a++;
                fn();
            }, 1000)
        });
        fn();
        //最新接口1
        function fn() {

            $.get('http://192.168.1.29:3000/play/new', {}, function (data) {
                changdu = data.length;
                for (var i = n; i < a; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                        var user = data[i][j];
                        var str_ = user.img.replace(/192.168.1.64/g, '192.168.1.29');
                        $('.s1').append("<li>" + '<img src="' + str_ + '"/>' + "<p>" + user.text + "</p>" + "<span>" + user.description + "</span>" + "<br>" + "<u>" + user.price + "</u>" + "<div>" + '<img class="imgs" src="' + "../image/xinRedo.png" + '"/>' + user.like + '<img src="' + "../image/reply.png" + '"/>' + user.words + "</div>" + "</li>");
                    }
                    $('.o1').append($('.s1'));
                }
            });
        }
    }

    function fn2() {

        var a = 1;
        var n = 0;
        var changdu;
        btn2.addEventListener('click', function () {

            this.style.background = "url('../image/loading-icon.gif') no-repeat left center";
            //定时器
            setTimeout(function () {
                btn2.style.background = "url('../image/more.png') no-repeat left center";
                n++;
                if (a == changdu) {
                    btn2.innerText = '没有更多的数据啦！'
                    return a = changdu;
                }
                a++;
                fn();
            }, 1000)
        });
        fn();
        //最热接口2
        function fn() {
            $.get('http://192.168.1.29:3000/play/hot', {}, function (data) {

                for (var i = n; i < a; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                        var user = data[i][j];
                        var str_ = user.img.replace(/192.168.1.64/g, '192.168.1.29');
                        $('.s2').append("<li>" + '<img src="' + str_ + '"/>' + "<p>" + user.text + "</p>" + "<span>" + user.description + "</span>" + "<br>" + "<u>" + user.price + "</u>" + "<div>" + '<img src="' + "../image/xin.png" + '"/>' + user.like + '<img src="' + "../image/reply.png" + '"/>' + user.words + "</div>" + "</li>");
                    }
                    $('.o2').append($('.s2'));
                }
            });
        }
    }

})





