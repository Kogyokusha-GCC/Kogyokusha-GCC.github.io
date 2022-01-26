//以下の三つの関数は、対応するidのついたspan要素を丸ごと全部、変数に代入されている文字列（HTMLソースの一部）に置換してるやで
//以前はdocument.writeで実装してた。それをouterHTMLを使うように書き換えたのが下のソースね

//Bootstrapインクルード
function includeBootstrap() {
    var includeBootstrapHtml =
        '<link href="css/bootstrap.min.css" rel="stylesheet">'+
        '<script src="js/bootstrap.min.js"></script>'+
            '<!--[if lt IE 9]>'+
                '<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>'+             
                '<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>'+
            '<![endif]-->';
    document.getElementById("includeBootstrap_id").outerHTML = includeBootstrapHtml;
};

//ナビゲーションバー
function writeNavigationBar() {
    var navBarHtml = 
        '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
        '<div class="container-fluid">' +
        '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
        '<span class="sr-only">Toggle navigation</span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '</button>' +
        '<span class="navbar-brand visible-xs">攻玉社コンピュータ部</span>' +
        '</div>' +
        '<div class="collapse navbar-collapse" id="navbar">' +
        '<ul class="nav navbar-nav">' +
            "<li>" +
            '<a href="index.html">トップページ</a>' +
            "</li>" +

            "<li>" +
            '<a href="activities.html">活動内容</a>' +
            "</li>" +

            "<li>" +
            '<a href="product.html">部員作品</a>' +
            "</li>" +
        
            "<li>" +
            '<a href="festival.html">オンライン輝玉祭特設ページ</a>' +
            "</li>" +

            "<li>" +
            '<a href="news.html">更新履歴</a>' +
            "</li>" +

            // "<li>" +
            // '<a href="link.html">リンク</a>' +
            // "</li>" +

            // "<li>" +
            // '<a href="inquiry.html">お問い合わせ</a>' +
            // "</li>" +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</nav>';
    document.getElementById("navMenu").outerHTML = navBarHtml;
};

//フッター
function writeFooter() {
    var footerHtml = 
        '<hr class="footer_hr">'+
        '<footer class="footer-margin text-center">'+
        
        "<div class=\"footer-text mpuls-1m-medium text-center\">"+
        "</div>"+
        "<a href=\"https://twitter.com/share?url=https%3a%2f%2fkogyokusha%2dgcc%2egithub%2eio%2f\" class=\"twitter-share-button\" data-lang=\"ja\" data-hashtags=\"攻玉社\" data-url=\"https://kogyokusha-gcc.github.io\">ツイート</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s+js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs+}}(document, 'script', 'twitter-wjs'+</script><br>"+
        "<div class=\"row\">"+
        "<div class=\"col-lg-12\">"+
        "<p>Powered by GitHub Pages and Bootstrap v3.3.7"+
        "<br>Copyright &copy;2011-2022 Kogyokusha-GCC, GyokuCombSoft</p>"+
        "</div>"+
        "</div>"+
        
        '</footer>';
    document.getElementById("footer").outerHTML = footerHtml;
};

//window.onload = function () {
//    includeBootstrap();
//    writeNavigationBar();
//    writeFooter();
//};
