$(function(){
  slideImg();
function slideImg(){
    let $interval = setInterval(function(){
        slide()
    }, 6000);
}
function slide(){
    $('.slide').animate({
        right : '-100%'
    }, 1000, "swing", function(){
        $(this).css({right : 0});
        $(this).append(
            $('.slide img').eq(0)
        )
    });
}

  });