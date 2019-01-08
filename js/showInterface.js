let positionSet = null;//计算位置定时器
let before;
let now;
//点击收缩功能
$('section .left').on('click', '.tit b', function () {
    $(this).toggleClass('route');
    $(this).closest('.tit').nextAll('ul').toggleClass('hide');
});
$('html').on('mousewheel', function () {
    if (positionSet === null) {
        positionSet = setInterval(function () {
            now = $(window).scrollTop();
            if (now >= 136) {
                $('section').addClass('fixed');
            }
            else {
                $('section').removeClass('fixed');
            }
        }, 10);
    }
});
//清除多余定时器
setInterval(function () {
    before = $(window).scrollTop();
    if (now !== undefined && before === now) {
        clearInterval(positionSet);
        positionSet = null;
        now = undefined
    }
}, 3000);