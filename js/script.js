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