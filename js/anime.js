$(window).on('load', function(){
  $('body').removeClass('fadeout');
});


$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();         // ページ遷移を一旦キャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得

    if (url !== '') {
      $('body').addClass('fadeout-in'); // 画面遷移時のアニメーション fadeout-in

      setTimeout(function () {
        window.location = url;  // 1秒後に取得したURLに遷移
      }, 700);
    }
    return false;
  });

});
