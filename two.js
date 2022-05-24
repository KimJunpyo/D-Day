let burger = $('.menu-trigger');
let windows = $('.menu-trigger2');
let test = $('.test');
let mHtml = $("html");
let page = 1;

burger.each(function(){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.selectview').toggleClass('active');
    $('.menu-trigger2').toggleClass('active');
  })
});

windows.each(function(){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $('.menu-trigger').toggleClass('active');
    $('.menu-trigger2').toggleClass('active');
    $('.selectview').toggleClass('active');
  })
})


mHtml.animate({scrollLeft : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page >= 3){
            page = 3;
            return;
        }
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page <= 1){
            page = 1;
            return;
        }
        page--;
    }
    if(page == 1){
      $(".one_page").animate({backgroundColor: "black"}, 500);
      $(".two_page").animate({backgroundColor: "white"}, 500);
      $(".three_page").animate({backgroundColor: "white"}, 500);
    }
    else if(page == 2){
      $(".one_page").animate({backgroundColor: "white"}, 500);
      $(".two_page").animate({backgroundColor: "black"}, 500);
      $(".three_page").animate({backgroundColor: "white"}, 500);
    }
    else if(page == 3){
      $(".one_page").animate({backgroundColor: "white"}, 500);
      $(".two_page").animate({backgroundColor: "white"}, 500);
      $(".three_page").animate({backgroundColor: "black"}, 500);
    }
    var posTop =(page-1) * $(window).width();
    mHtml.animate({scrollLeft: posTop}, 500);
})