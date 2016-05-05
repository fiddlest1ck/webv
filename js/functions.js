$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.image1').css({
    'transform' : 'translate(0px, '+ wScroll /8 +'%)'
  });

  $('.image2').css({
    'transform' : 'translate(0px, '+ wScroll /6 +'%)'
  });

  


});
