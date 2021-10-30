var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax.open('get', 'http://192.168.1.29:3000/report/hot');
ajax.send();
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            var data = JSON.parse(ajax.responseText);
            console.log(data);
            //渲染数据
            showData(data);
        }
    }
}
function showData(val) {
    var str = '';
    for (var i of val) {
        var img_ = i.img.replace(/localhost/g, '192.168.1.29');
        str += '<li>';
        str += '<img src="' + img_ + ' " alt="">';
        str += '<p>' + i.text + '</p>';
        str += '<div>';
        str += '<div class="left">';
        str += '<span>';
        str += '<img src="../css/img/tx.jpg" alt="">';
        str += '</span>';
        str += '<span>' + i.uName + '</span>';
        str += '<span>' + i.endTime + '</span>'
        str += '</div>';
        str += '<div class="right">';
        str += '<span class="xin">';
        str += '<img src="../css/img/xin.png" alt="">';
        str += '</span>';
        str += i.num;
        str += '<span class="xin">';
        str += '<img src="../css/img/reply.png" alt="">';
        str += '</span>';
        str += i.apply;
        str += '</div>';
        str += '</div>';
        str += '</li>';
    }
    var ul = document.getElementsByClassName('list')[0]
    ul.innerHTML = str;
}



function fn() {
    var none_ = document.getElementById('none');
    none_.innerHTML = '没有更多了...'
}