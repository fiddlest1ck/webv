$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.image1').css({
    'transform' : 'translate(0px, '+ wScroll /20 +'%)'
  });

  $('.image2').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

   $('.largest-window').css({
    'transform' : 'translate(23%, '+ wScroll /70 +'%)'
  });

   });