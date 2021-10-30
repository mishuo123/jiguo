window.addEventListener('load', function () {
    fn1();

    function fn1() {
        var btn1 = document.getElementsByClassName('but1')[0];
        var n = 0;
        var a = 1;
        var changdu;
        btn1.addEventListener('click', function () {
            this.style.background = "url('./img/loading-icon.gif') no-repeat left center";
            //定时器
            setTimeout(function () {
                btn1.style.background = "url('./img/more.png') no-repeat left center";
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
        //接口
        function fn() {
            $.get('http://192.168.1.29:3000/play/new', {}, function (data) {
                changdu = data.length;
                for (var i = n; i < a; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                        var user = data[i][j];
                        var str_ = user.img.replace(/192.168.1.64/g, '192.168.1.29');
                        $('.s1').append("<li>" + '<img src="' + str_ + '"/>' + "<p>" + user.text + "</p>" + "<span>" + user.description + "</span>" + "<br>" + "<u>" + user.price + "</u>" + "<div>" + '<img src="' + "./img/xin.png" + '"/>' + user.like + '<img src="' + "./img/reply.png" + '"/>' + user.words + "</div>" + "</li>");
                    }
                    $('.box5_cont').append($('.s1'));
                }

            });

        }
    }
})

// 倒计时
setInterval(function () {
    // 获取当前时间
    var now_time = new Date();
    // 设置目标时间
    var time = new Date(2021, 12, 12);
    // 时间差
    var go_time = time - now_time; //

    // 换算单位
    var day = parseInt(go_time / 1000 / 60 / 60 / 24);
    var h = parseInt(go_time / 1000 / 60 / 60 % 24);
    h = h > 9 ? h : '0' + h;
    var m = parseInt(go_time / 1000 / 60 % 60);
    m = m > 9 ? m : '0' + m;
    var s = parseInt(go_time / 1000 % 60);
    s = s > 9 ? s : '0' + s;

    var str = (day + '天' + h + '时' + m + '分' + s + '秒');
    var span_ = document.getElementById('time');
    span_.innerHTML = str;
}, 1000)
