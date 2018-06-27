const navList = $('#navList');
const foldButton = $('.foldButton');

var brownsWeight=$(window).width();
var brwonsHeight=$(window).height();
navList.hide();
foldButton.click(function () {
    if (navList.css('display') === 'none') {
        navList.slideDown();
        foldButton.transition({
            rotate: '180deg'
        })
    } else {
        navList.slideUp();
        foldButton.transition({
            rotate: '0deg'
        })
    }
});


