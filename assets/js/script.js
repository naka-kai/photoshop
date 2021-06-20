$(function () {

  $(function () {
    $(".header_nav-button").on("click", function () { //.nav-buttonをクリックした時
      if ($(this).hasClass("active")) { //.nav-buttonに.activeが無かったら
        $(this).removeClass("active"); //.nav-buttonに.activeをつけて
        $(".header_nav-wrap") //.nav-wrapに
          .addClass("close") //.closeをつけて
          .removeClass("open"); //.openを消す
      } else { //そうでなければ
        $(this).addClass("active"); //.nav-buttonに.activeをつけて
        $(".header_nav-wrap") //.nav-wrapに
          .addClass("open") //.openをつけて
          .removeClass("close"); //.closeを消す
      }
    });
  });


  //ハンバーガーメニューのナビリンククリック後自動で閉じる
  $('.header_list-item a').on('click', function () {
    $('.header_nav-button').click();
  });


});
