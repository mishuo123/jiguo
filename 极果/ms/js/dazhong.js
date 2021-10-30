// $.get('http://192.168.1.29:3000/useing/public', {}, function (data) {
//     for (var i = 0; i < data.length; i++) {
//         var user = data[i];
//         var str_ = user.img.replace(/localhost/g, '192.168.1.29');
//         $('.s1').append("<li>" + '<img src="' + str_ + '"/>' + "<p>" + user.text + "</p>" + "<span>" + user.description + "</span>" + "<br>" + "<u>" + user.price + "</u>" + "<div>" + '<img src="' + "../image/xin.png" + '"/>' + user.like + '<img src="' + "../image/reply.png" + '"/>' + user.num + "</div>" + "</li>");
//     }
//     $('.o1').append($('.s1'));
// });