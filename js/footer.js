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

document.open();
document.write("<div class=\"footer-text mpuls-1m-medium text-center\">");
if (isSmartphone()) {
    document.write("<a href=\"http://www.kogyokusha.ed.jp/m/index.shtml\">攻玉社学園公式サイト</a><br><br>");
} else {
    document.write("<a href=\"http://www.kogyokusha.ed.jp/index.shtml\">攻玉社学園公式サイト</a><br><br>");
}

document.write("</div>");
document.write("<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-lang=\"ja\" data-hashtags=\"攻玉社\" data-url=\"https://kogyokusha-gcc.github.io\">ツイート</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>");
document.write("<iframe src=\"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fkigyokusai%2F&layout=button&mobile_iframe=true&width=61&height=20&appId\" width=\"61\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>");

document.write("<div class=\"row\">");
document.write("<div class=\"col-lg-12\">");
document.write("<p>Copyright &copy; Kogyokusha G.C.C. All Rights Reserved.");
document.write("<br>Powered by GitHub Pages and Bootstrap v3.3.7</p>");
document.write("</div>");
document.write("</div>");
document.write("<span id=\"page-top\" class=\"right\"><a href=\"#\">▲PAGE TOP</a></span>");
document.close();
