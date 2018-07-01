function isSmartphone() {   //スマホからのアクセスかどうか
    var ua = navigator.userAgent;
    if (ua.indexOf('Android') == -1 &&
        ua.indexOf('iPhone') == -1 &&
        ua.indexOf('iPad') == -1) {
        return false;
    } else {
        return true;
    }
}

$(window).on('load resize', function(){
    // navbarの高さを取得する
    var height = $('.navbar').height();
    // bodyのpaddingにnavbarの高さを設定する
    $('body').css('padding-top',height); 
});