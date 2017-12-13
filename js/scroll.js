$(document).ready(function(){

  var winHeight = $(window).height();
  console.log("ウィンドウの高さ: " + winHeight + "px");
  var documentHeight = $('body').height();
  console.log("ドキュメントの高さ: " + documentHeight + "px");

  var lineHeight = $('.line').offset().top;
  console.log("div.lineのオフセット: " + lineHeight + "px");

  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    console.log("スクロール量: " + scrollTop);
    console.log("div.lineのオフセット: " + lineHeight + "px");
  });

}); // End
