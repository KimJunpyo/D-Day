let burger = $('.menu-trigger');
let windows = $('.menu-trigger2');

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