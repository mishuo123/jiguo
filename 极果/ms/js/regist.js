//获取元素
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
var input6 = document.getElementById('input6');
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var n5 = document.getElementById('n5');
var n6 = document.getElementById('n6');

input1.addEventListener('focus', function () {
    n1.innerHTML = '<i class="c1"></i>请输入6-12个字符，推荐使用中文会员名';
    n1.style.color = '#00bffe';
})