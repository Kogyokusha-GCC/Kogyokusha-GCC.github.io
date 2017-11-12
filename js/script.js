/*学校公式サイトへのリンク
アクセスしているデバイスを判定し、飛ばすリンク先を変えている*/
function isSmartphone() {
    var ua = navigator.userAgent;
    if (ua.indexOf('Android') == -1 ||
            ua.indexOf('iPhone') == -1 ||
            ua.indexOf('iPad') == -1) {
        return false;
    } else {
        return true;
    }
}
/*学校公式サイトへのリンク　おわり*/