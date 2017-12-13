$(document).ready(function(){

  // ウィンドウ最下部からページの最下部までの距離 = 
  // ドキュメントの高さ - (スクロール量 + ウィンドウの高さ)

  $('.line').each(function(){
    var thisPositionTop = $(this).offset().top;
    console.log("lineのpositionTop :" + thisPositionTop + "px");
    var scrollAmount = 0;

    $(window).on('scroll', function(){
      var winHeight = $(window).height();
      console.log("ウィンドウの高さ: " + winHeight + "px");
      scrollAmount = $(window).scrollTop(); // スクロール量
      console.log("スクロール量 :" + scrollAmount + "px");
      var plus = winHeight + scrollAmount;
      console.log("winHeight + scrollAmount: " + plus + "px");  
      if(plus >= thisPositionTop){
        $('p').css({'color': 'red'});
      }else{
        $('p').css({'color': '#000'});
      }
    });

  }); // Each

}); // End
